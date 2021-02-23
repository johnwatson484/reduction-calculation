const round = require('../round')

module.exports = function calculateReduction (bpsValue, reductionRate) {
  const reduction = round(bpsValue * reductionRate.rate, 2)
  return {
    bpsValue,
    rate: reductionRate.rate,
    reduction,
    payment: round(bpsValue - reduction, 2)
  }
}
