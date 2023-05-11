import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Posts: FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
};

export default Posts;
