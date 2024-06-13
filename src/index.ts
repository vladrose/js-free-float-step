import Decimal from "decimal.js"

export default function jsFreeFloatStep(number: number | undefined, defaultStep = 0.1): number {
  if (!number || number === 0) return defaultStep
  const decimalPlaces = new Decimal(number).decimalPlaces()
  const dynamicStep = new Decimal(10).pow(-decimalPlaces)
  return Decimal.min(defaultStep, dynamicStep).toNumber()
}
