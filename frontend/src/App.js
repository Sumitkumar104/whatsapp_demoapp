import './App.css';
import Messenger from './Components/messenger';
import { Route,Routes } from 'react-router-dom';
import Authpage from './Components/Authpage';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Authpage/>}/>
      <Route path="/messenger" element={<Messenger/>}/>     
    </Routes>
    </div>
  );
}

export default App;
