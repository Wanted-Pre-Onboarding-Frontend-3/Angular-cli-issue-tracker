import axios from 'axios';

export const initialState = {
  issue: {
    number: '',
    title: '',
    author: '',
    state: '',
    created_at: '',
    comments: 0,
    profile_img: '',
    body: '',
  },
};

export const getIssueData = async (dispatch) => {
  dispatch({ type: 'GET_ISSUES' });

  try {
    const response = await axios.get(`${process.env.REACT_APP_API_HOST}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const issueReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ISSUES': {
      return {
        ...state,
      };
    }
    default:
      throw new Error(`Error in action type ${action.type}`);
  }
};
