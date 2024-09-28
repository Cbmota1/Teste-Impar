import Banner from './componentes/Banner';
import Header from './componentes/Header';
import Galeria from './componentes/Galeria';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Galeria />
    </>
  );
}

export default App;
