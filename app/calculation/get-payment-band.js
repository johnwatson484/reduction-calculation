const round = require('../round')

module.exports = function getPaymentBands (bpsValue) {
  const paymentBands = []

  if (bpsValue <= 30000) {
    paymentBands.push({ band: 1, value: bpsValue })
    return paymentBands
  }

  if (bpsValue <= 50000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: round(bpsValue - 30000, 2) })
    return paymentBands
  }
  if (bpsValue <= 150000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: 20000 })
    paymentBands.push({ band: 3, value: round(bpsValue - 50000, 2) })
    return paymentBands
  }
  if (bpsValue > 150000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: 20000 })
    paymentBands.push({ band: 3, value: 100000 })
    paymentBands.push({ band: 4, value: round(bpsValue - 150000, 2) })
    return paymentBands
  }
}
