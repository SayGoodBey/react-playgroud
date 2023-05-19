import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface RootState {
  person: {
    personInfo: {
      age: string;
    };
  };
}

const Age: React.FC = () => {
  console.log('Age---rerender---------');
  const dispatch = useDispatch();
  const age = useSelector((state: RootState) => state.person.personInfo.age);

  const handleChangeAge = () => {
    const newAge = age + 1;
    dispatch({
      type: 'person/changeAge',
      payload: newAge,
    });
  };

  return (
    <div>
      <p>age: {age}</p>
      <button onClick={handleChangeAge}>changeAge</button>
    </div>
  );
};

export default Age;
