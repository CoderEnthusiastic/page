import Header from './components/header/Header';
import SongBox from './components/songBox/SongBox';
import AboutArtist from './components/aboutArtist/AboutArtist';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SongBox />
      <AboutArtist />
      <Footer />
    </div>
  );
}

export default App;
