'use strict';

export const renderIf = (test, component) => test ? component: undefined;
export const classToggle = options => {
  Object.keys(options).filter(key => !!options[key]).join(' ');
}
