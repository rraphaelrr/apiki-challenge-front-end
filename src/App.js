import React from 'react';
import Header from './components/header/header';
import Routing from './routes/route';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  document.title = "Apiki  Blog "
  return (
    <div className='App'>
      <Header />
      <Routing />
    </div>
  )
}
export default App;