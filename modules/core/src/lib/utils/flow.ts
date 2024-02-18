/**
 * The MIT License
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export function flow(...funcs: Function[]) {
  const length = funcs.length;
  let i = length;
  while (i--) {
    if (typeof funcs[i] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return function (this: any, ...args: any[]) {
    let j = 0;
    let result = length ? funcs[j].apply(this, args) : args[0];
    while (++j < length) {
      result = funcs[j].call(this, result);
    }
    return result;
  };
}
