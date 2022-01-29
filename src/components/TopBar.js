import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
//<i class="fas fa-shopping-cart"></i>

function TopBar() {

  const redirect = () => {
    alert('Redirected');
  }

  return <div className='app-top-bar'>
      <h1>My Store</h1>
    
      <Button color={'white'} text={<FontAwesomeIcon icon={faShoppingCart} size='2x' />} click={() => redirect()}/>
   

      
      
  </div>;
}

export default TopBar;
