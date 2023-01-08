import { Link } from 'react-router-dom';
import { footerLinks } from '../../const';
import { Logo } from '../logo/logo';
import './page-footer.css';

function PageFooter(): JSX.Element {
  return (
    <footer className='page-footer footer'>
      <div className='container'>
        <div className='footer__inner'>
          <div className='footer__item'>
            <Logo block='footer'/>
            <span className='footer__copyright'>Copyright 2021. Antools</span>
            <p className='footer__info'>
              Antool is a web collection of information on paid or free Design and Development tools
            </p>
          </div>
          <address className='footer__item'>
            <h2 className='footer__title'>Contact Us</h2>
            <ul className='footer__list'>
              <li className='footer__list-item'>
                <a className='footer__link' href='tel:+621987463'>+621987463</a>
              </li>
              <li className='footer__list-item'>M Building, No.10 A</li>
              <li className='footer__list-item'>
                <a className='footer__link' href='mailto:antools@awesome.com'>antools@awesome.com</a>
              </li>
            </ul>
          </address>
          <div className='footer__item'>
            <h2 className='footer__title'>Categories</h2>
            <ul className='footer__list'>
              {footerLinks.slice(0, 2).map((item) => (
                <li className='footer__list-item' key={item}>
                  <Link className='footer__link' to='#'>
                    {item}
                  </Link>
                </li>)
              )}
            </ul>
          </div>
          <div className='footer__item'>
            <h2 className='footer__title'>Company Info</h2>
            <ul className='footer__list'>
              {footerLinks.slice(2).map((item) => (
                <li className='footer__list-item' key={item}>
                  <Link className='footer__link' to='#'>
                    {item}
                  </Link>
                </li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export {PageFooter};
