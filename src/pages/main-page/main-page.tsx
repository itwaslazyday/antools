import Feedbacks from '../../components/feedbacks/feedbacks';
import Newcomer from '../../components/newcomer/newcomer';
import Partners from '../../components/partners/partners';
import Popular from '../../components/popular/popular';
import Promo from '../../components/promo/promo';
import Contributor from '../../contributor/contributor';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <main className='page-main'>
      <Promo/>
      <Popular/>
      <Partners/>
      <Newcomer/>
      <Feedbacks/>
      <Contributor/>
    </main>
  );
}

export {MainPage};
