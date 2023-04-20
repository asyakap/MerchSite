import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import EditItemForm from './EditItemForm';
import ItemDetail from './ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
  }

  handleAddingNewItemToList = (newItem) => {
    console.log("we are here");
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedItem = (id) => {
    let selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleBuyClick = (id) => {
    let selectedItem = this.state.mainItemList.find(item => item.id === id);
    selectedItem.quantity -= 1;
    const newMainItemList = this.state.mainItemList.map((item) => { return item.id === id ? selectedItem : item});
    console.log(selectedItem.quantity);
    this.setState({mainItemList: newMainItemList});
  }

  handleRestockClick = (id, stock) => {
    let selectedItem = this.state.mainItemList.find(item => item.id === id);
    selectedItem.quantity += stock;
    const newMainItemList = this.state.mainItemList.map((item => { return item.id === id? selectedItem : item}));
    this.setState({mainItemList: newMainItemList});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to List of Items";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail 
      item={this.state.selectedItem} 
      onClickingDelete={this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List"; 
    } else {
      currentlyVisibleState = <ItemList 
      item={this.state.selectedItem} 
      itemList={this.state.mainItemList}
      onBuyItem = { this.handleBuyClick}
      onRestockItem = {this.handleRestockClick}
      onItemSelect={this.handleChangingSelectedItem}   />;
      buttonText = "Add Item"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button class="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default ItemControl;