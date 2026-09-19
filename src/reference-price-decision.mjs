function suppressReason(merchant, peer) {
  if (peer.productKey !== merchant.productKey) return 'PRODUCT_MISMATCH';
  if (!peer.inStock) return 'OUT_OF_STOCK';
  if (!peer.fresh) return 'STALE';
  if (typeof peer.price !== 'number' || !Number.isFinite(peer.price) || peer.price < 0) return 'INVALID_PRICE';
  return null;
}

export function buildPriceDecision({ merchant, peers }) {
  if (!merchant || !Array.isArray(peers)) throw new TypeError('merchant and peers are required');
  if (typeof merchant.price !== 'number' || !Number.isFinite(merchant.price) || merchant.price < 0) {
    throw new TypeError('merchant price must be a non-negative finite number');
  }

  const suppressed = { PRODUCT_MISMATCH: 0, OUT_OF_STOCK: 0, STALE: 0, INVALID_PRICE: 0 };
  const eligible = [];

  for (const candidate of peers) {
    const reason = suppressReason(merchant, candidate);
    if (reason) suppressed[reason] += 1;
    else eligible.push(candidate);
  }

  eligible.sort((a, b) => a.price - b.price || String(a.id).localeCompare(String(b.id)));

  if (eligible.length === 0) {
    return {
      status: 'INSUFFICIENT_EVIDENCE',
      comparablePrice: null,
      priceGap: null,
      eligiblePeerIds: [],
      suppressed,
    };
  }

  const comparablePrice = eligible[0].price;
  return {
    status: 'WATCH',
    comparablePrice,
    priceGap: merchant.price - comparablePrice,
    eligiblePeerIds: eligible.map(peer => peer.id).sort(),
    suppressed,
  };
}
