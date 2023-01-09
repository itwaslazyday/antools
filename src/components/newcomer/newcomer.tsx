import './newcomer.css';
import { newcomerToolsList } from '../../const';
import ToolCard from '../tool-card/tool-card';

function Newcomer():JSX.Element {
  return (
    <section className='newcomer'>
      <div className='container'>
        <div className='newcomer__inner'>
          <div className='newcomer__content'>
            <h2 className='newcomer__title'>Newcomer Tools</h2>
            <p className='newcomer__text'>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
            <button className='newcomer__more-btn custom-button'>Explore more</button>
          </div>
          <div className='newcomer__tools'>
            {newcomerToolsList.map((card) =>
              <ToolCard card={card} key={card.title} block='newcomer'/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newcomer;
