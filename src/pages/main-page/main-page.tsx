import Feedbacks from '../../components/feedbacks/feedbacks';
import Promo from '../../components/promo/promo';
import Contributor from '../../contributor/contributor';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <main className='page-main'>
      <Promo/>
      <Feedbacks/>
      <Contributor/>
    </main>
  );
}

export {MainPage};
