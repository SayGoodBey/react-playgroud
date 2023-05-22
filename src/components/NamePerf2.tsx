import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getPersonName } from '@/models/person';

const NamePerf2: React.FC = () => {
  console.log('NamePerf2222222---rerender---------');
  const dispatch = useDispatch();
  const name = useSelector(getPersonName, shallowEqual);
  const handleChangeName = () => {
    const newName = name === '张三' ? '李四' : '张三';
    dispatch({
      type: 'person/changeName',
      payload: newName,
    });
  };

  return (
    <div>
      <p>name+NamePerf2: {name}</p>
      <button onClick={handleChangeName}>changeName</button>
    </div>
  );
};

export default NamePerf2;
