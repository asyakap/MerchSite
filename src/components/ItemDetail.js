import React from "react";
import PropTypes from "prop-types";


function ItemDetail(props){
  const { item, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Item Details</h1><br />
      <h3>{item.name} - {item.quantity}</h3><br />
      <p><em>{item.description}</em></p><br />
      <button class="btn btn-light" onClick={ props.onClickingEdit }>Update Item</button> <br />
      <button class="btn btn-light" onClick={()=> onClickingDelete(item.id) }>Delete Item</button> 
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