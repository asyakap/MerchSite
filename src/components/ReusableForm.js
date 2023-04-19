import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='number'
          name='quantity'
          placeholder='1' />
        <textarea
          name='description'
          placeholder='Item Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};