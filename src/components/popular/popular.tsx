import './popular.css';
import { popularToolsList } from '../../const';
import ToolCard from '../tool-card/tool-card';

function Popular():JSX.Element {
  return (
    <section className='popular'>
      <div className='container'>
        <div className='popular__inner'>
          <h2 className='popular__title'>Most Popular Tools</h2>
          <p className='popular__text'>Tools for the best Designers and Developers most popularly used in the world</p>
          <div className='popular__tools'>
            {popularToolsList.map((card) =>
              <ToolCard card={card} key={card.title}/>
            )}
          </div>
          <button className='popular__more-btn button-reset'>Load more</button>
        </div>
      </div>
    </section>
  );
}

export default Popular;
