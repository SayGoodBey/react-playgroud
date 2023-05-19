import { FC } from 'react';

import Age from '@/components/Age';
import Hobby from '@/components/Hobby';
import Name from '@/components/Name';
const Home: FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Name />
      <br />
      <Age />
      <br />
      <Hobby />
    </>
  );
};

export default Home;
