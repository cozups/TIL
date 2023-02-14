import React from 'react';
import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이페이지</div>;
}

export default MyPage;
