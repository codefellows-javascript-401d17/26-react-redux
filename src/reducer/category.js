
let initialState = [];

export default (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CATEGORY_CREATE':
    console.log('payload, needs to have all 4', payload)
      return ([...state, payload]);
    case 'CATEGORY_UPDATE':
      return (state.map((category) => {
        return category.id === payload.id ? payload : category;
      }))
    case 'CATEGORY_DELETE':
      return state.filter((category) => {
        return category.id === payload.id;
      })
    case 'CATEGORY_RESET':
      return state = initialState;
    default:
      return state;
  }
}