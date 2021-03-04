import './mainContent.css';

export default function MainContent() {
  return(
    <div className="mainContent">
      <div className="presentation">
        <div className="textContent">
          <strong>Olá pessoas,</strong>
          <h1>EU SOU UM PROGRAMADOR</h1>
          <strong>Seja bem-vindo ao meu portfólio website</strong>
        </div>

        <button>Saiba mais sobre mim</button>

        <div className="socialMedia">
          <a target="_blank" href="https://github.com/MatheusCampos-450" rel='noreferrer'>
            <img src="icons/logo_git.svg" alt="GitHub"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/matheus-campos-9b8550192/" rel='noreferrer'>
            <img src="icons/logo_linkedin.svg" alt="Linkedin"/>
          </a>
          <a target='_blank' href="https://www.instagram.com/matheuscampos_450/" rel='noreferrer'>
            <img src="icons/logo_instagram.svg" alt="Instagram"/>
          </a>
        </div>
      </div>

      <figure className="avatar">
        <img src="icons/avatar.svg" alt="avatar"/>
      </figure>
    </div>
  );
}