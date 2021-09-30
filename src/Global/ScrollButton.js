import React, {useState} from 'react';
import {FaArrowAltCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
  
const ScrollButton = (props) =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 1000){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
    props.loadStored();
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaArrowAltCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none', color: 'grey'}} />
    </Button>
  );
}
  
export default ScrollButton;