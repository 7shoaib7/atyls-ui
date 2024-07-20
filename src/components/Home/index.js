import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from "../../constants/routes";
import Signup from '../Signup';
import Login from '../Login';
import logo from '../../assets/images/logo.svg';
import './home.css';

const Home = ({currentUser} ) => {
    const navigate = useNavigate();
    const location = useLocation();

  
    useEffect(() => {
      if (currentUser) {
        // Redirect to blog page
        navigate(ROUTES.BLOG);
      }
    }, [currentUser,navigate]);
  
    return (
      <div className='home'>
        <Link to={ROUTES.BLOG}>
          <img className='home__logo' src={logo} alt="logo" />
        </Link>
        <div className='home__content'>
          {
            location.pathname === ROUTES.SIGNUP
              ? <Signup />
              : <Login />
          }
        </div>
      </div>
    );
  };
  
  export default Home;