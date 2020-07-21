const initialState = {
  url: '',
  method: 'GET',
  textBody: '',
  response: {},
  history: []
};

export default function restfulReducer(state = initialState, action) {
  switch(action.type){
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'SET_METHOD':
      return { ...state, method: action.payload };
    case 'SET_TEXT':
      return { ...state, textBody: action.payload };
    case 'ADD_HISTORY': 
      state.history.push(action.payload);
      return { ...state };
    case 'ADD_RESPONSE':
      return { ...state, response: action.payload };
    default:
      return state;
  }
}
