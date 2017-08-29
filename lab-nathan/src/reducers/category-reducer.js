const categoryReducer = function(categories = [], action) {
  switch (action.type) {
    case 'CATEGORY_CREATE':
      return [...categories, action.payload];
    case 'CATEGORY_UPDATE':
      return categories.map(category => category.id === action.payload.id ? action.payload : category);
    case 'CATEGORY_DELETE':
      return categories.filter(category => category.id !== action.payload.id);
    case 'CATEGORY_RESET':
      return [];
    default:
      return categories;
  }
}

export default categoryReducer;