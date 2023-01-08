import { Form } from '../form/form';
import './promo.css';

const socials = ['facebook', 'instagram', 'twitter'];

function Promo(): JSX.Element {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__inner'>
          <div className='promo__wrapper'>
            <h1 className='promo__title'>Awesome tools for Designer & Developer
              <span>.</span>
            </h1>
            <p className='promo__info'>Antool is a web collection of information on paid or free Design and Development
              tools
            </p>
            <Form
              block='promo'
              placeholder='find more than 430+ tools...'
              buttonText='Search'
              pseudo
              type='text'
              method='GET'
              action='#'
            />
            <ul className='promo__socials socials'>
              {socials.map((item) => (
                <li className='socials__item' key={item}>
                  <a className='socials__link' href='#' target='_blank' rel='noopener noreferrer'>
                    <img src={`img/${item}.svg`} alt={item[0].toUpperCase() + item.slice(1)}/>
                  </a>
                </li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
