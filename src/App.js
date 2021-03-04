import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

import './styles/global.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <MainContent />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
