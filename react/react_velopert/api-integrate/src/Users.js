import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

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

function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchUsers = async () => {
    dispatch({
      type: 'LOADING',
    });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      dispatch({
        type: 'SUCCESS',
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
      });
    }
  };

  // useEffect의 콜백 함수에 async를 바로 붙일 수 없음 => 따로(or 안에서) async 함수 만들어서 호출
  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, error, data: users } = state;

  if (loading) return <div>로딩 중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
