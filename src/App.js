import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './view/layouts/TopBar';
import Header from './view/layouts/Header';
import Main from './view/layouts/Main';
import Phone from './view/layouts/Phone';
import Footer from './view/layouts/Footer';
import Copyright from './view/layouts/Copyright';
import GoTop from './view/layouts/GoTop';
import NavFooter from './view/layouts/NavFooter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Header />
        <Main />
        <Phone />
        <Footer />
        <Copyright />
        <GoTop />
        <NavFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
