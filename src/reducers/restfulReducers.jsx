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
      return { ...state, url: action.payload.url };
    default:
      return state;
  }
}
