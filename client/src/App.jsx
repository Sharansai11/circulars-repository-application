import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Login2 from './components/Login/Login2';
import AdminHome from './components/AdminHome/AdminHome';
import StaffHome from './components/StaffHome/StaffHome';
import ErrorPage from './ErrorPage';
import AddUser from './components/AddUser/AddUser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import CircularUpload from './components/CircularUpload/CircularUpload';
import PdfTableAdmin from './components/PdfTableAdmin/PdfTableAdmin';
import ViewCircular from './components/viewCircular/ViewCircular';
import CircularDownload from './components/circularDownload/Circulardownload';
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Login2 />,
        },
        {
          path: '/admin-profile',
          element: <AdminHome />,
          children: [
            {
              index: true,
              element: <  ViewCircular />,
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
              element: <DeleteUser />,
            },
            {
              path: 'upload-circular',
              element: <CircularUpload />,
            }
          ],
        },
        {
          path: '/staff-profile',
          element: <StaffHome />,
          children: [
            {
              index: true,
              element: <  ViewCircular />,
            },

          ],
        },
        {
          path: '/circular-download',
          element: <CircularDownload />,
        }

      ]
    },

  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
