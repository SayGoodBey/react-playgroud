import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

interface RootState {
  person: {
    personInfo: {
      hobby: string[];
    };
  };
}

const Hobby: React.FC = () => {
  console.log('Hobby---rerender---------');
  const dispatch = useDispatch();
  const { hobby } = useSelector((state: RootState) => state.person.personInfo, shallowEqual);

  const handleChangeHobby = () => {
    dispatch({
      type: 'person/changeHobby',
      payload: [...hobby, '干饭'],
    });
  };

  return (
    <div>
      <p>hobby: {hobby.join()}</p>
      <button onClick={handleChangeHobby}>changeHobby</button>
    </div>
  );
};

export default Hobby;
