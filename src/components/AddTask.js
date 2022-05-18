import { useState } from "react"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { uk } from 'date-fns/locale/'
import Button from "./Button";


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [reminder, setReminder] = useState(false);
  const [dayTime, setDayTime] = useState('');

  const onToday = (e) => {
    e.preventDefault();
    setDayTime(new Date())
    console.log(dayTime)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add task description');
      return
    }
    onAdd({ text, dayTime, reminder })
    setText('')
    setDayTime('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <TextField autoComplete="off" placeholder='Add Task' value={text} onChange={(e) => { setText(e.target.value) }} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <div className="date-time">
          <LocalizationProvider locale={uk} dateAdapter={AdapterDateFns}>
            <DateTimePicker renderInput={(props) => <TextField autoComplete="off" {...props} />}
              value={dayTime} onChange={(newValue) => { setDayTime(newValue); }} />
            <Button className="btn" color='cornflowerblue' text="Today" onClick={onToday} />
          </LocalizationProvider>
        </div>
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type='checkbox' checked={reminder} onChange={(e) => { setReminder(e.currentTarget.checked) }} />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask