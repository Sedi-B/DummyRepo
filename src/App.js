import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Job from './Pages/Job';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Home />
      
      </div>
      <div className='post'>

      <Job/>
      <Footer/>
      </div>
     
     
    </div>
  );
}

export default App;
