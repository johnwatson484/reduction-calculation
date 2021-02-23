module.exports = function getPaymentBands (bpsValue) {
  const paymentBands = []

  if (bpsValue <= 30000) {
    paymentBands.push({ band: 1, value: bpsValue })
    return paymentBands
  }

  if (bpsValue <= 50000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: bpsValue - 30000 })
    return paymentBands
  }
  if (bpsValue <= 150000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: 20000 })
    paymentBands.push({ band: 3, value: bpsValue - 50000 })
    return paymentBands
  }
  if (bpsValue > 150000) {
    paymentBands.push({ band: 1, value: 30000 })
    paymentBands.push({ band: 2, value: 20000 })
    paymentBands.push({ band: 3, value: 100000 })
    paymentBands.push({ band: 3, value: bpsValue - 150000 })
    return paymentBands
  }
}
