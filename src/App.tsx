import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { MoviePage } from './pages/MoviePage';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
