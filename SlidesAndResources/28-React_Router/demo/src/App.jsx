// 👉 STEP 2 - React Router imports (Routes, Route)
//components
import Home from './components/Home';
import Navbar from './components/NavBar';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';

function App() {

  return (
    <div className='App'>
       <nav>
          <h1 className="store-header">Penguin&apos;s Emporium</h1>
          <Navbar />
        </nav>
         {/* 👉 STEP 3 - Build Routes for Home, ItemsList and ItemDetails */}
    </div>
  )
}

export default App
