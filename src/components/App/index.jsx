import './styles.scss' ;
import Header from "../Header";
import Banner from '../Banner';
import Content from '../Content';
import Footer from '../Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
        <Content/>
      <Footer/>
    </>
    )
}

export default App ;