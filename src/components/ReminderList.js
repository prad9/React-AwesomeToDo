import React from "react";
import PropTypes from "prop-types";
import Reminder from "./Reminder";

const ReminderList = ({ reminders, toggleTodo }) => (
  <div className="row">
    <ul className="col-md-12">
      {reminders.map(reminder => (
        <Reminder
          key={reminder.id}
          {...reminder}
          onClick={() => toggleTodo(reminder.id)}
        />
      ))}
    </ul>
  </div>
);

ReminderList.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default ReminderList;
