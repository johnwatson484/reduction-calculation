const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')

function calculate (bpsValue) {
  const paymentBands = getPaymentBands(bpsValue)
  return paymentBands.map(calculateBand)
}

module.exports = calculate
