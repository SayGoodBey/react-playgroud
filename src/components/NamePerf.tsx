import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { largeComputation } from '@/utils';

interface RootState {
  person: {
    personInfo: {
      name: string;
    };
  };
}

const NamePerf: React.FC = () => {
  console.log('NamePerf---rerender---------');
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => {
    largeComputation();
    return state.person.personInfo.name;
  });

  const handleChangeName = () => {
    const newName = name === '张三' ? '李四' : '张三';
    dispatch({
      type: 'person/changeName',
      payload: newName,
    });
  };

  return (
    <div>
      <p>name: {name}</p>
      <button onClick={handleChangeName}>changeName</button>
    </div>
  );
};

export default NamePerf;
