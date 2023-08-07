import { FC, useRef, useState } from 'react';

const Test: FC = () => {
  console.log('test--rerender------');
  //   const [name, setName] = useState('张三');
  const name = useRef('张三');

  //   const handleClick = () => {
  //     const newName = name === '张三' ? '李四' : '张三';
  //     setName(newName);
  //   };

  setTimeout(() => (name.current = '李四'), 1000);

  return (
    <>
      <h1>Test</h1>
      <div>
        <div>{name.current}</div>
        {/* <button onClick={handleClick}>click</button> */}
      </div>
    </>
  );
};

export default Test;
