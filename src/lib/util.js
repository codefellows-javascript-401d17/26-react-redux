export const renderif = (test, component) => test ? component : undefined;

export const classToggler = (options) =>
  object.keys(options).filter(key => !!options[key]).join(' ')
