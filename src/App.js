import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="ml-9">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
