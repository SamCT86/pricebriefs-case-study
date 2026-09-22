function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function suppressReason(merchant, peer) {
  if (!peer || typeof peer !== 'object' || Array.isArray(peer)) return 'INVALID_EVIDENCE_CONTRACT';
  if (!nonEmptyString(peer.id)) return 'INVALID_EVIDENCE_CONTRACT';
  if (peer.productKey !== merchant.productKey) return 'PRODUCT_MISMATCH';
  if (!nonEmptyString(peer.currency)) return 'INVALID_EVIDENCE_CONTRACT';
  if (peer.currency !== merchant.currency) return 'CURRENCY_MISMATCH';
  if (typeof peer.sourceQualified !== 'boolean') return 'INVALID_EVIDENCE_CONTRACT';
  if (!peer.sourceQualified) return 'SOURCE_UNQUALIFIED';
  if (typeof peer.inStock !== 'boolean') return 'INVALID_EVIDENCE_CONTRACT';
  if (!peer.inStock) return 'OUT_OF_STOCK';
  if (typeof peer.fresh !== 'boolean') return 'INVALID_EVIDENCE_CONTRACT';
  if (!peer.fresh) return 'STALE';
  if (typeof peer.price !== 'number' || !Number.isFinite(peer.price) || peer.price < 0) return 'INVALID_PRICE';
  return null;
}

export function buildPriceDecision({ merchant, peers }) {
  if (!merchant || !Array.isArray(peers)) throw new TypeError('merchant and peers are required');
  if (!nonEmptyString(merchant.productKey)) throw new TypeError('merchant productKey must be a non-empty string');
  if (!nonEmptyString(merchant.currency)) throw new TypeError('merchant currency must be a non-empty string');
  if (typeof merchant.price !== 'number' || !Number.isFinite(merchant.price) || merchant.price < 0) {
    throw new TypeError('merchant price must be a non-negative finite number');
  }

  const suppressed = {
    PRODUCT_MISMATCH: 0,
    CURRENCY_MISMATCH: 0,
    SOURCE_UNQUALIFIED: 0,
    OUT_OF_STOCK: 0,
    STALE: 0,
    INVALID_PRICE: 0,
    INVALID_EVIDENCE_CONTRACT: 0,
  };
  const eligible = [];
  const idCounts = new Map();

  for (const candidate of peers) {
    if (!nonEmptyString(candidate?.id)) continue;
    idCounts.set(candidate.id, (idCounts.get(candidate.id) ?? 0) + 1);
  }

  for (const candidate of peers) {
    if (nonEmptyString(candidate?.id) && idCounts.get(candidate.id) > 1) {
      suppressed.INVALID_EVIDENCE_CONTRACT += 1;
      continue;
    }
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
