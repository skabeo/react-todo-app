import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoApp from './components/todoApp';
import Navbar from './components/Navbar';
import About from './routes/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
