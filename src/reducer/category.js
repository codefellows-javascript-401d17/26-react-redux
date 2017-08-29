let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      return state.map(category => {
        console.log(category);
        console.log(payload);
        category.id === payload.id ? payload : category
      })
    case 'CATEGORY_DELETE':
      console.log('delete');
      return state.filter(category => category.id !== payload.id)
    default:
      return state
  }
}
