import { FC } from 'react';

const NoMatch: FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>当前路由不存在</p>
    </div>
  );
};
export default NoMatch;
