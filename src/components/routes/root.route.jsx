import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/nav';

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
