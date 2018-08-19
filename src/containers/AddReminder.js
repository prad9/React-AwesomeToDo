import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddReminder = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        className="row"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <div className="col-md-8">
          <input
            className="form-control"
            ref={node => (input = node)}
          />
        </div>
        <button className="btn btn-primary col-md-4" type="submit">
          Add Quick Reminder
        </button>
      </form>
    </div>
  );
};

export default connect()(AddReminder);
