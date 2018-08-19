import React, { Component } from "react";
import Footer from "./Footer";
import AddReminder from "../containers/AddReminder";
import VisibleTodoList from "../containers/VisibleReminders";

class Reminders extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <AddReminder />
          </div>
          <div className="col-md-3">
            <Footer />
          </div>
        </div>
        <br />
        <div className="row" />
        <VisibleTodoList />
      </div>
    );
  }
}

export default Reminders;
