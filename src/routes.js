import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import UserList from './pages/UserList';
import RequestList from './pages/RequestList';
import CategoryList from './pages/CategoryList';
import CityList from './pages/CityList';
import ComplaintList from './pages/ComplaintList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import UserDashboard from "./container/Layouts/Dashboard";
import UserDashboardB from "./container/Layouts/DashboardB";
import Home from './container/Home/Home';
import Signin from './container/Login';
import SearchItems from './container/Search';
import SellProducts from './container/Sell';
import BuyProducts from './container/Buy';
import Complaint from './container/Complaint';
import Profile from './container/Profile';
import Details from './container/Details/Detail';
import Detail from './container/Details';
import MyRequest from './container/Request';
import MyInterest from './container/Interest';
import ViewAll from './container/ViewAll';
const routes = [
  {
    path: 'user',
    element: <UserDashboard />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'search', element: <SearchItems /> },
      { path: 'sell', element: <SellProducts /> },
      { path: 'buy', element: <BuyProducts /> },
      { path: 'interest', element: <MyInterest /> },
      { path: 'complaint', element: <Complaint /> },
      { path: 'request', element: <MyRequest /> },
      { path: 'settings', element: <SearchItems /> },
      { path: 'category', element: <SearchItems /> },
      { path: 'reports', element: <SearchItems /> },
      { path: 'profile', element: <Profile /> },
      { path: 'details', element: <Details /> },
      { path: 'viewall', element: <ViewAll /> },
      { path: 'signin', element: <Signin /> },
    ]
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'users', element: <UserList /> },
      { path: 'request', element: <RequestList /> },
      { path: 'category', element: <CategoryList /> },
      { path: 'city', element: <CityList /> },
      { path: 'complaint', element: <ComplaintList /> },
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/user/home" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

];

export default routes;
