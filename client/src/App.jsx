import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login2 from './components/Login/Login2';
import AdminHome from './components/AdminHome/AdminHome';
import StaffHome from './components/StaffHome/StaffHome';
import ErrorPage from './ErrorPage';
import AddUser from './components/AddUser/AddUser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import CircularUpload from './components/CircularUpload/CircularUpload';
import PdfTableAdmin from './components/PdfTableAdmin/PdfTableAdmin';
import PdfTableStaff from './components/PdfTableStaff/PdfTableStaff';
import ViewCircular from './components/viewCircular/ViewCircular';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login2 />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/admin-profile',
      element: <AdminHome />,
      children: [
        {
          path: '',
          element: <PdfTableAdmin />,
        },
        {
          path: 'circular',
          element: <ViewCircular />,
        },
        {
          path: 'add-user',
          element: <AddUser />,
        },
        {
          path: 'delete-user',
          element: <DeleteUser/>,
        },
        {
          path: 'upload-circular',
          element: <CircularUpload/>,
        }
      ],
    },
    {
      path: '/staff-profile',
      element: <StaffHome />,
      children: [
        {
          path: '',
          element: <PdfTableStaff />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
