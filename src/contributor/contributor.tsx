import { Form } from '../components/form/form';
import './contributor.css';

function Contributor():JSX.Element {
  return (
    <section className="contributor">
      <div className="container">
        <div className="contributor__inner">
          <h2 className="title contributor__title">Become a contributor?</h2>
          <p className="contributor__info">Join us and get tips & tricks to become a great Designer and Developer</p>
          <Form
            block='contributor'
            placeholder='Enter your email...'
            buttonText='Join us'
            pseudo={false}
            type='email'
            method='POST'
            action='#'
          />
        </div>
      </div>
    </section>
  );
}

export default Contributor;
