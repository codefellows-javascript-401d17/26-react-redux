const uuid = require('uuid/v1');


export const categoryCreate = (category) => {
  console.log('called from dashboard?');
  category.id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category
  }
}

export const categoryUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category
  }
}

export const categoryDelete = (category) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category
  }
}

export const categoryReset = () => {
  return {
    type: 'CATEGORY_RESET'
  }
}