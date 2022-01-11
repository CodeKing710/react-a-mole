import React, {useState} from 'react';
import Mole, {EmptySlot} from './Mole';

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);
  const handleClick = () => {
    props.setScore(props.score+1);
    setDisplayMole(false);
  };
  
  return(
    <div>
      {displayMole ? <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setDisplayMole} handleClick={handleClick} />}
    </div>
  )
}

export default MoleContainer;