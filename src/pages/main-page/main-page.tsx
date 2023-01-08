import Feedbacks from '../../components/feedbacks/feedbacks';
import Popular from '../../components/popular/popular';
import Promo from '../../components/promo/promo';
import Contributor from '../../contributor/contributor';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <main className='page-main'>
      <Promo/>
      <Popular/>
      <Feedbacks/>
      <Contributor/>
    </main>
  );
}

export {MainPage};
