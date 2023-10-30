import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import History from './Pages/History';
import CategoryDetails from './Pages/CategoryDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='/category/:id' element={<CategoryDetails></CategoryDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
