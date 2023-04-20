import React from "react";
import PropTypes from "prop-types";


function ItemDetail(props){
  const { item, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Item Details</h1><br />
      <h3>{item.name} - {item.quantity}</h3><br />
      <p><em>{item.description}</em></p><br />
      <button onClick={ props.onClickingEdit }>Update Item</button> <br />
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button> 
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default ItemDetail;

// AFTER LUNCH GOALS:

// Increase or decrease the quantity of an item in the store. For instance, if a user clicks "Buy", the quantity will decrease by one. If a user clicks "Restock", it will increment by a specified number.

// When the quantity of an item is reduced to 0, the item should say "Out of Stock". A user should not be able to reduce the quantity of an item below 0.