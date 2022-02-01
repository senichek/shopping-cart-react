import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Button from './Button';

function TopBar() {

 // Used to redirect a user to a specific URL.
  let navigate = useNavigate();

  const redirect = (URL) => {
    navigate(URL);
  }

  return <div className='app-top-bar'>
      <a href="/"> <h1>My Store</h1> </a>
      <Button color={'white'} text={<FontAwesomeIcon icon={faShoppingCart} size='2x' />} click={() => redirect('/cart')}/>
  </div>;
}

export default TopBar;
