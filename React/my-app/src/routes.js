import Movies from './pages/Movies';
import Users from './pages/Users';
import Home from './pages/Home';

const route = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    },
];

export default route;