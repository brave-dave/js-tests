import { expect, test } from 'vitest'
import { sumMultiple } from '.'

test('sumMultiple should return the result 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55)', () => {
  expect(sumMultiple(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toBe(55)
})

test('sumMultiple should return the result 5 (10 + -5 + 4 + 6 + -10 = 5)', () => {
  expect(sumMultiple(10, -5, 4, 6, -10)).toBe(5)
})