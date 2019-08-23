import React, { useState } from 'react';
import "./App.css";

function BottomRow  () {
  const [Yard, setBallYard] = useState(20);
  const countRef = Yard

 
    setTimeout(() => {
      setBallYard(countRef + 10);
    }, 2000);
 



  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{Yard}</div>
        <button className="homeButtons__fieldGoal" onClick={() => setBallYard(Yard + 10)}>{Yard}</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  );
};

export default BottomRow;
