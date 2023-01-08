import { NavLink } from 'react-router-dom';
import { headerLinks } from '../../const';
import { Logo } from '../logo/logo';
import './page-header.css';

function PageHeader(): JSX.Element {
  return (
    <header className='page-header header'>
      <div className='container'>
        <div className='header__inner'>
          <Logo block='header'/>
          <nav className='header__navigation navigation'>
            <ul className='navigation__list'>
              {headerLinks.map((item) => (
                <li className='navigation__list-item' key={item}>
                  <NavLink
                    className={`navigation__link ${item === 'Categories' ? 'navigation__link--options' : ''}`}
                    to='#'
                  >
                    {item}
                  </NavLink>
                </li>)
              )}
            </ul>
          </nav>
          <div className='header__buttons'>
            <button className='header__login' type='button'>Login</button>
            <button className='header__signup custom-button' type='button'>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export {PageHeader};
