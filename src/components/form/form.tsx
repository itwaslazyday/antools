import './form.css';

type FormProps = {
  block: string;
  placeholder: string;
  buttonText: string;
  pseudo: boolean;
  type: string;
  method: string;
  action: string;
};

function Form({block, placeholder, buttonText, pseudo, type, method, action}: FormProps):JSX.Element {
  return (
    <form className={`${block}__form form`} method={method} action={action} target='_self'>
      <div className='form__wrapper-gradient'>
        <div className={`form__wrapper ${pseudo ? 'form__wrapper--pseudo' : ''}`}>
          <input type={type} placeholder={placeholder} required/>
          <button className='custom-button form__submit' type='submit'>{buttonText}</button>
        </div>
      </div>
    </form>
  );
}

export {Form};
