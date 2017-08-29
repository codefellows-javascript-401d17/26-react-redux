let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      console.log('update');
      return state.map(category => category.id === payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      console.log('delete');
      return state.filter(category => category.id !== payload.id)
    default:
      return state
  }
}
