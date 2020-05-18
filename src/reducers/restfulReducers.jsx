const initialState = {
  url: '',
  method: 'GET',
  textBody: '',
  response: [],
  history: []
};

export default function restfulReducer(state = initialState, action) {
  switch(action.type){
    case 'SET_URL':
      return { ...state, url: action.url };
    default:
      return state;
  }
}
