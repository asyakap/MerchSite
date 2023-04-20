import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
        <Item
          // whenItemClicked = { props.onItemSelection }
          name={item.name}
          quantity={item.quantity}
          description={item.description}
          onBuyItem={props.onBuyItem}
          onRestockItem={props.onRestockItem}
          onItemSelect={props.onItemSelect}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onBuyItem: PropTypes.func,
  onRestockItem: PropTypes.func,
  onItemSelect: PropTypes.func
};

export default ItemList;