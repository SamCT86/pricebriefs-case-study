import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPriceDecision } from '../src/reference-price-decision.mjs';

const merchant = { productKey: 'sku-1', price: 120, currency: 'USD' };

function peer(id, overrides = {}) {
  return { id, productKey: 'sku-1', price: 100, inStock: true, fresh: true, ...overrides };
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
