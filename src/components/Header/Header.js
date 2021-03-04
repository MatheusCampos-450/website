import './header.css';

export default function Header() {
  return (
    <header className="mainHeader">
      <div className="userLogo">
        <figure>
          <img src="icons/logo.svg" alt=""/>
        </figure>
        <h1>Matheus Campos</h1>
      </div>

      <div className="menu">
        <button>home</button>
        <button>sobre</button>
        <button>portfolio</button>
        <button>serviços</button>
        <button>resumo</button>
        <button>contato</button>
      </div>
    </header>
  )
}