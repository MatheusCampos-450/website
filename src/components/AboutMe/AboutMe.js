import './aboutMe.css';

export default function AboutMe(){
  return(
    <div className="aboutMe">
      <section className="about">
        <figure>
          <img src="icons/about_photo.png" alt="Matheus photography"/>
        </figure>

        <div className="name">
          <h1>Matheus</h1>
          <h1>Campos</h1>
        </div>

        <p>
          Meu chamo Matheus Amauri de Jesus Campos. Eu sou do Brasil, São José dos Campos/SP.<br/>
          Estou cursando o 4° semestre de Análise e Desenvolvimento de Sistemas na 
          Fatec Prof. Jessen Vidal - São José dos Campos.          
        </p>
      </section>

      <section className="hardSkills">
        <h1>Hard Skills</h1>
        <div className="skills">

        </div>
      </section>
    </div>
  );
}