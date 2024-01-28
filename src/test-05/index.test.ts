import { expect, test } from 'vitest'
import { getPreviousNumber } from '.'

test('getPreviousNumber should return the previous number (2)', () => {
  expect(getPreviousNumber(1)).toBe(2)
})