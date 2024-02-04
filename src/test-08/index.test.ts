import { expect, test } from 'vitest'
import { getListOfArguments } from '.'

test('getListOfArguments returns a list of number arguments', () => {
  expect(getListOfArguments(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toBe([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})

test('getListOfArguments returns a list of string arguments', () => {
  expect(getListOfArguments('ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one')).toBe(['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'])
})
