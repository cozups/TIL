import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        data: null,
        loading: true,
        error: null,
      };
    case 'SUCCESS':
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case 'ERROR':
      return {
        data: null,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
