import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Questions />
    </div>
  );
}

export default App;