import { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Age from '@/components/Age';
import Hobby from '@/components/Hobby';
import Name from '@/components/Name';
import NamePerf from '@/components/NamePerf';
import NamePerf2 from '@/components/NamePerf2';
import { getPersonName } from '@/models/person';
const Home: FC = () => {
  // const name = useSelector(getPersonName, shallowEqual);
  // const name = useSelector((state: RootState) => {
  //   return state.person.personInfo.name;
  // });
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <div>name-----{name}</div> */}
      {/* <Name /> */}
      {/* <NamePerf />
      <NamePerf />
      <NamePerf />
      <NamePerf />
      <NamePerf /> */}
      <NamePerf2 />
      <NamePerf2 />
      <NamePerf2 />
      <NamePerf2 />
      <NamePerf2 />
      <br />
      <Age />
      <br />
      <Hobby />
    </>
  );
};

export default Home;
