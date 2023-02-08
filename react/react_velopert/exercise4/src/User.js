import React from 'react';

function User({ users, onToggle }) {
  // null checking
  // if (!users) {
  //   return null;
  // }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

User.defaultProps = {
  onToggle: () => {
    console.warn('onToggle is missing!');
  },
};

export default User;
