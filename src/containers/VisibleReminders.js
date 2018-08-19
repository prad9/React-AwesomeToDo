import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ReminderList from '../components/ReminderList'
import { VisibilityFilters } from '../actions'

const getVisibleReminders = (reminders, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return reminders;
    case VisibilityFilters.SHOW_COMPLETED:
      return reminders.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return reminders.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  reminders: getVisibleReminders(state.reminders, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList);
