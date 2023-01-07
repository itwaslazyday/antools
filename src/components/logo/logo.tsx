import { Link } from 'react-router-dom';

type LogoProps = {
  block: string;
};

function Logo({block}: LogoProps):JSX.Element {
  return (
    <Link className={`'${block}__logo'`} to='#'>
      <img src='img/antools-logo.svg' alt='Antools logotype'/>
    </Link>
  );
}

export {Logo};
