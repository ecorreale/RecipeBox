import { useReducer } from 'react';

//pass action type to reducer and then use a swiutch statement to mutat the state

const reducer = (state, action) => {
  // console.log("globalState:action: " )
  // console.log(action)
  // console.log("globalState:state:")
  // console.log(state)

  switch (action.type) {
    case 'SIGN_IN':
      console.log(
        '===================== reducer: SIGN_IN ===================================='
      );
      console.log('Pre-State');
      console.log(state);

      console.log('Pre-action');
      console.log(action);
      return {
        IsAuthenticated: true,
        Token: action.Token,
      };

    case 'SIGN_OUT':
      return {
        IsAuthenticated: false,
        Token: null,
      };

    default: {
      console.log('============ Default ===============');
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    // IsAuthenticated: false,
    // Token:null
  });
  console.log(
    '============================= useGlobalState +====================================='
  );
  console.log('Post-State');
  console.log(globalState);

  console.log('Post-action');
  console.log(globalDispatch);

  return { globalState, globalDispatch };
};
export default useGlobalState;
