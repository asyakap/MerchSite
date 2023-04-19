import React from "react";
import PropTypes from "prop-types";

function Item(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - {props.quantity}</h3>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;