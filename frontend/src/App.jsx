import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Componentes
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';


//Pages
import CreateClient from './components/pages/Client/CreateClient';
import Clients from './components/pages/Client/Clients';
import Home from './components/pages/Home';



function App() {
 
  return (

    <Router>

      <Navbar />

      <Message/>

      <Container>

        <Routes>

          <Route path='/createClient' element={<CreateClient />} > </Route>

          <Route path='/Clients' element={<Clients />} ></Route>

          <Route path='/' element={<Home />} ></Route>

        </Routes>

      </Container>

      <Footer />

    </Router>

  )
}

export default App
