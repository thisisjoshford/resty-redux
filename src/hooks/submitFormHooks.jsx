import { useDispatch, useSelector } from 'react-redux';
import { getUrl, getMethod, getTextBody, getResponse, getHistory } from '../selectors/selectors';
import { setUrl, setMethod, setTextBody, hitApi } from '../actions/restfulActions';

export const useSubmitForm = () => {
  const dispatch = useDispatch();
  const url = useSelector(getUrl);
  const method = useSelector(getMethod);
  const textBody = useSelector(getTextBody);
  const response = useSelector(getResponse);
  const history = useSelector (getHistory);

  const onChange = ({ target }) => {
    if(target.name === 'url') dispatch(setUrl(target.value));
    if(target.name === 'method') dispatch(setMethod(target.value));
    if(target.name === 'textBody') dispatch(setTextBody(target.value));
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(hitApi(url, method, textBody));
  };

  return {
    url,
    method,
    textBody,
    response,
    history,
    onChange,
    onSubmit
  };
};
