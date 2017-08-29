'use strict';

import uuid from 'uuid/v1';

export const categoryCreate = (cat) => {
  cat.id = uuid();
  cat.published = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: cat
  };
};

export const categoryUpdate = (cat) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: cat
  };
};

export const categoryDelete = (cat) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: cat
  };
};

export const categoryReset = () => ({type: 'CATEGORY_RESET'});
