import React from "react";

function Investor(props) {
  return (
    <div className="investorDiv">
      <img className="investorPic" src={props.pic}></img>
      <h2 className="card-title">{props.title}</h2>
      <hr></hr>
      <dl>
        <dt>
          <h3 className="card-text">{props.text1}</h3>
        </dt>
        <dd>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
          </p>
        </dd>
        <dt>
          <h3 className="card-text">{props.text2}</h3>
        </dt>
        <dd>
          <p className="card-text">{props.para}</p>
        </dd>
      </dl>
    </div>
  );
}

export default Investor;
