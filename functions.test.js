let functions = require('./function')

test('returns the integer 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('returns Hello + name', () => {
    expect(functions.greeting('Will')).toBe('Hello Will.')
})

test('returns sum of two numbers being added', () => {
    expect(functions.add(20, 2)).toBe(22)
})

test('returns sum of two numbers being mutiplied', () => {
    expect(functions.multiply(20, 2)).toBe(40)
})

test('returns sum of two numbers being divided', () => {
    expect(functions.divide(20, 2)).toBe(10)
})

test('returns sum of two numbers being subtracted', () => {
    expect(functions.subtract(6, 3)).toBe(3)
})

