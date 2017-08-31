import uuid from 'uuid/v1';

export const categoryCreate = (category) => {
  category.id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category
  }
};

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category
});

export const categoryDestroy = (category) => ({
  type: 'CATEGORY_DESTORY',
  payload: category
});
