import { Routes, Route } from 'react-router-dom';
//import Hero from './components/Hero/Hero';
import Home from './components/HomePage/HomePage';
//import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List';
//import Button from './components/Button/Button';
//import Column from './components/Column/Column';
import Container from './components/Container/Container';
//import ColumnForm from './components/ColumnForm/ColumnForm';
import NavBar from './NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </main>
  );
};


export default App;