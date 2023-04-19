import React from "react";
import PropTypes from "prop-types";

function Item(props){

  function handleClick() {
    return props.onBuyItem(props.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return props.onRestockItem(props.id, parseInt(event.target.quantity.value));
  }

  let itemDisplay = null;
  if (props.quantity <= 0) {
    itemDisplay = <h3>{props.name} is <strong>Out of Stock</strong></h3>
  } else {
    itemDisplay =
    <>
    <h3>Name: {props.name}</h3><br />
    <li>Description: {props.description}</li><br />
    <li> Quantity Available: {props.quantity}</li>
    <button className="btn btn-block btn-lg btn-dark" onClick={handleClick}>Buy</button>
    </>
  }

  return (
    <React.Fragment>
      <div onClick={() => props.onItemSelect(props.id)}>
      {itemDisplay}
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="100" name="quantity" className="form-control"/>
      <button>Restock</button>
      </form>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  onBuyItem: PropTypes.func,
  onRestockItem: PropTypes.func,
  onItemSelect: PropTypes.func
}

export default Item;