import series from '../src/math'
import {jest} from '@jest/globals'


test('Numero 1', () => {
 expect(series(1)).toBe(10);
});

test('Numero 2', () => {
  expect(series(2)).toBe(14);
});

test('Numero 3', () => {
    expect(series(3)).toBe(22);
});

test('Numero 4', () => {
    expect(series(4)).toBe(30);
});

test('Numero 5', () => {
    expect(series(5)).toBe(47);
});

test('Numero 6', () => {
    expect(series(6)).toBe(58);
});

test('Numero 7', () => {
    expect(series(7)).toBe(81);
});

test('Numero 8', () => {
    expect(series(8)).toBe(103);
});

test('Numero 9', () => {
    expect(series(9)).toBe(145);
});

test('Numero 10', () => {
    expect(series(10)).toBe(215);
});