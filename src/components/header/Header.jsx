import './header.css';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <header className="header">
      <h1>World Population 2023</h1>
    </header>
    <Outlet />
  </>
);

export default Header;
