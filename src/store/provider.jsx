import { createContext, useContext, useReducer } from 'react';

import { initialState, issueReducer } from './reducer';

const IssueStateContext = createContext(null);
const IssueDispatchContext = createContext(null);

export const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};

export const useIssueState = () => {
  const state = useContext(IssueStateContext);

  if (!state) {
    throw new Error('Cannot find IssueProvider');
  }
  return state;
};

export const useApiDispatch = () => {
  const dispatch = useContext(IssueDispatchContext);

  if (!dispatch) {
    throw new Error('Cannot find IssueProvider');
  }
  return dispatch;
};
