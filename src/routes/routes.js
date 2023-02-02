import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layouts/Main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h3>this page is not found!</h3>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])


export default routes;
