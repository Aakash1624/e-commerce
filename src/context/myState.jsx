import { useState } from 'react';
import MyContext from './myContext';

const MyState = (props) => {
  const [filterCat, setFilterCat] = useState('');
  const value = { filterCat, setFilterCat };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

export default MyState;
