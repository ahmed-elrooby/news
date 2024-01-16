
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Offline } from 'react-detect-offline';

function App() {
  let newData = new Date()
  return <>
  <Navbar />
  <Outlet/>
  <Offline>
    <div className='bg-secondary border border-4 border-white text-white p-2 m-2 position-fixed bottom-0 start-0 '>
      <h3 className='text-capitalize'>OPPS your internet Connection has lost </h3>
    </div>
  </Offline>
  <h6 className="d-flex text-white justify-content-center mt-4 mb-4">Copyright © {newData.toLocaleDateString()} ElRooby ®</h6>
  </>
}

export default App;