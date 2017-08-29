export default (state = [], action) => {
  switch (action.type) {
    case 'CATEGORY_CREATE':
      return [...state, action.payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => category.id === payload.id ? payload : category);
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id);
    case 'CATEGORY_RESET':
      return [];
    default:
      return state;
  }
};