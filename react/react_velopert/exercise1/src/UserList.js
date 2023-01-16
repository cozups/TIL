import React, { useEffect } from 'react';

const User = React.memo(({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{' '}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList);
