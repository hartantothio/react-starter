// Value must not be empty
export function required(value) {
  return value ? undefined : 'Required';
}

// Value must contains only alphabetic characters
export function alpha() {}

// Value must contains only alpha-numeric characters
export function alphaNum() {}

// Value must contains only alpha-numeric, dashes, and underscores characters
export function alphaDash() {}

// Value must be numeric
export function num() {}

// Value must exist in the list
export function isIn(list) {}

// Value must not exist in the list
export function isNotIn(list) {}

/**
 * Value must have a size matching the given value.
 *
 * String - value must match given number of characters
 * Number - value must match given integer value
 * Array - value must match give size of array
 */
export function size(list) {}

// Value must be a valid JSON string
export function json() {}

// Value must be a valid URL
export function url() {}

// Value must be less than or equal to max
export function max(max) {
  return value =>
    value && value.length <= max ? undefined : `Must be at most ${max}`;
}

// Value must be more than or equal to min
export function min(min) {
  return value =>
    value && value.length >= min ? undefined : `Must be at least ${min}`;
}

/**
 * This function  allows the user of the validation utility to compose one or more validator functions
 */
export function compose(...validators) {
  return value =>
    validators.reduce((err, validator) => err || validator(value), undefined);
}
