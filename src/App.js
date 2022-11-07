import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Routes/Routes';

function App() {
  return (
    <div className="ml-9">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
