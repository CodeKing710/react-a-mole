import React, { useEffect } from 'react';

function Mole(props) {
  useEffect(()=>{
    //Want moles to disappear quicker than they appear to make game harder
    let randSec = Math.ceil(Math.random()*2000);
    let timer = setTimeout(()=>{
      props.setDisplayMole(false);
    }, randSec);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{width:'30%'}} src="./mole.png" alt="Mole" onClick={props.handleClick} />
    </div>
  )
}

export default Mole;

function EmptySlot(props) {
  useEffect(()=>{
    //Can show up between 0 and 10 seconds
    let randSec = Math.ceil(Math.random()*10000);
    let timer = setTimeout(()=>{
      props.setDisplayMole(true);
    }, randSec);
    return () => clearTimeout(timer);
  });

  return(
    <div>
      <img style={{'width':'30%'}} src="./molehill.png" alt="Mole Hill" />
    </div>
  )
}

export {EmptySlot};