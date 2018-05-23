export function required(value) {
  return value ? undefined : 'Required';
}

export function max(param) {
  return value =>
    value && value.length <= param ? undefined : `Must be at most ${param}`;
}

export function min(param) {
  return value =>
    value && value.length >= param ? undefined : `Must be at least ${param}`;
}

export function compose(...validators) {
  return value =>
    validators.reduce((err, validator) => err || validator(value), undefined);
}
