import './partners.css';
import { partnerList } from '../../const';

function Partners():JSX.Element {
  return (
    <section className='partners'>
      <div className='container'>
        <div className='partners__inner'>
          <h2 className='visually-hidden'>Our partners</h2>
          <p className='partners__text'>Trusted more than 150+ brand</p>
          <ul className='partners__list'>
            {partnerList.map((item) => (
              <li className='partners__list-item' key={item.name}>
                <a className='partners__item-link' href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.name}>
                  <svg>
                    <use xlinkHref={`img/sprite/sprite.svg#${item.name.toLowerCase()}`}></use>
                  </svg>
                </a>
              </li>)
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partners;
