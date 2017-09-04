import { validateCategory } from '../lib/validators.js';

const categoryReducer = function(categories = [], action) {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE': {
      validateCategory(payload);
      return [...categories, payload];
    }
    case 'CATEGORY_UPDATE': {
      validateCategory(payload);      
      return categories.map(category => category.id === payload.id ? payload : category);
    }
    case 'CATEGORY_MOVE': {
      validateCategory(payload.category);
      
      let newCategories = [];

      for (let index = 0; index < categories.length; index++) {
        let category = categories[index];
        if (index === payload.newIndex) {
          newCategories.push(payload.category);
        }
        if (category.id !== payload.category.id) {
          newCategories.push(category);
        }
      }

      return newCategories;
    }
    case 'CATEGORY_DELETE': {
      validateCategory(payload);      
      return categories.filter(category => category.id !== payload.id);
    }
    default:
      return categories;
  }
}

export default categoryReducer;