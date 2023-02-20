import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { loading, data, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, data, dispatch]);

  if (loading && !data) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
