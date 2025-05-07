// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: 123456789', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('valid email: abc@example.com', () => {
  expect(isEmail('abc@example.com')).toBe(true);
});
test('valid email: my_email123@ucsd.edu', () => {
  expect(isEmail('my_email123@ucsd.edu')).toBe(true);
});
test('invalid email: abc.com', () => {
  expect(isEmail('abc.com')).toBe(false);
});
test('invalid email: @example.com', () => {
  expect(isEmail('@example.com')).toBe(false);
});

test('valid password: a1234', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});
test('valid password: Z_underscore', () => {
  expect(isStrongPassword('Z_underscore')).toBe(true);
});
test('invalid password: 123start', () => {
  expect(isStrongPassword('123start')).toBe(false);
});
test('invalid password: a%#', () => {
  expect(isStrongPassword('a%#')).toBe(false);
});

test('valid date: 1/1/2023', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date: 2023/1/1', () => {
  expect(isDate('2023/1/1')).toBe(false);
});
test('invalid date: 1-1-2023', () => {
  expect(isDate('1-1-2023')).toBe(false);
});

test('valid hex color: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid hex color: #a1b2c3', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});
test('invalid hex color: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('invalid hex color: #123abz', () => {
  expect(isHexColor('#123abz')).toBe(false);
});