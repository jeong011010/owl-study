import Movies from './pages/Movies';
import Users from './pages/Users';
import User from './pages/User';
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
    {
        path: '/users/:id',
        component: User
    }
];

export default route;