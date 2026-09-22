import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPriceDecision } from '../src/reference-price-decision.mjs';

const merchant = { productKey: 'sku-1', price: 120, currency: 'USD' };

function peer(id, overrides = {}) {
  return { id, productKey: 'sku-1', price: 100, currency: 'USD', sourceQualified: true, inStock: true, fresh: true, ...overrides };
}

test('one clean comparable peer yields bounded WATCH, never ACT', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1')] });
  assert.equal(result.status, 'WATCH');
  assert.equal(result.comparablePrice, 100);
  assert.equal(result.priceGap, 20);
});

test('no eligible peer preserves INSUFFICIENT_EVIDENCE', () => {
  const result = buildPriceDecision({ merchant, peers: [] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.comparablePrice, null);
});

test('out-of-stock peer cannot drive a price gap', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { inStock: false })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.OUT_OF_STOCK, 1);
});

test('cross-product peer cannot drive a price gap', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { productKey: 'sku-2', price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.PRODUCT_MISMATCH, 1);
});

test('stale peer cannot drive a price gap', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { fresh: false })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.STALE, 1);
});

test('peer ordering does not change the decision', () => {
  const a = peer('a', { price: 105 });
  const b = peer('b', { price: 98 });
  assert.deepEqual(
    buildPriceDecision({ merchant, peers: [a, b] }),
    buildPriceDecision({ merchant, peers: [b, a] })
  );
});

test('unqualified source cannot drive a WATCH decision', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { sourceQualified: false, price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.SOURCE_UNQUALIFIED, 1);
});

test('missing source qualification cannot support WATCH', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { sourceQualified: undefined, price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
});

test('truthy non-boolean stock state cannot support WATCH', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { inStock: 'false', price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
});

test('truthy non-boolean freshness state cannot support WATCH', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { fresh: 'false', price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
});

test('evidence without a traceable peer id cannot support WATCH', () => {
  const result = buildPriceDecision({ merchant, peers: [peer(undefined, { price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
});

test('merchant product identity is required before evaluating peers', () => {
  assert.throws(
    () => buildPriceDecision({ merchant: { price: 120, currency: 'USD' }, peers: [peer('p1', { productKey: undefined, price: 1 })] }),
    /merchant productKey/
  );
});

test('cross-currency evidence cannot drive a raw price gap', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { currency: 'EUR', price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.CURRENCY_MISMATCH, 1);
});

test('evidence without currency identity is an invalid evidence contract', () => {
  const result = buildPriceDecision({ merchant, peers: [peer('p1', { currency: undefined, price: 1 })] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
  assert.equal(result.suppressed.CURRENCY_MISMATCH, 0);
});

test('merchant currency identity is required before comparing peer prices', () => {
  assert.throws(
    () => buildPriceDecision({ merchant: { productKey: 'sku-1', price: 120 }, peers: [peer('p1', { price: 1 })] }),
    /merchant currency/
  );
});

test('duplicate evidence ids cannot support an ambiguous WATCH decision', () => {
  const result = buildPriceDecision({
    merchant,
    peers: [peer('dup', { price: 100 }), peer('dup', { price: 1 })],
  });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 2);
});

test('null peer evidence is suppressed instead of crashing the whole decision', () => {
  const result = buildPriceDecision({ merchant, peers: [null] });
  assert.equal(result.status, 'INSUFFICIENT_EVIDENCE');
  assert.equal(result.suppressed.INVALID_EVIDENCE_CONTRACT, 1);
});
