/* eslint-disable @typescript-eslint/no-loss-of-precision */

import { describe, it, expect } from "vitest"

import jsFreeFloatStep from "../src/index"

describe("jsFreeFloatStep", () => {
  it("returns 0.1 for undefined value", () => {
    expect(jsFreeFloatStep(undefined)).toBe(0.1)
  })

  it("returns 0.1 for 0 value", () => {
    expect(jsFreeFloatStep(0)).toBe(0.1)
  })

  it("returns 0.01 for values with two decimal places", () => {
    expect(jsFreeFloatStep(0.05)).toBe(0.01)
  })

  it("returns 0.001 for values with three decimal places", () => {
    expect(jsFreeFloatStep(0.005)).toBe(0.001)
  })

  it("returns 0.1 for integer values", () => {
    expect(jsFreeFloatStep(5)).toBe(0.1)
    expect(jsFreeFloatStep(100)).toBe(0.1)
  })

  it("returns correct step for very small values", () => {
    expect(jsFreeFloatStep(0.0000045)).toBe(0.0000001)
  })

  it("returns correct step for incredibly small values", () => {
    expect(jsFreeFloatStep(0.008212490858845996)).toBe(0.000000000000000001)
  })

  it("returns correct step for negative values", () => {
    expect(jsFreeFloatStep(-0.04)).toBe(0.01)
    expect(jsFreeFloatStep(-0.0002)).toBe(0.0001)
  })
})
