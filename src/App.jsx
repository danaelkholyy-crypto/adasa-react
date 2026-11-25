import Layout from './Components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import Home from './Pages/Home';

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/blogDetails', element: <BlogDetails></BlogDetails>},
        {path: '/*', element: <h2>not found</h2>},
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}
