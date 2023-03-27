import "./calendar.css";

const weekdays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
]

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Calendar = () => {
  return (
    <div className="calendar">
      <nav className="month-year">
        <p>Mes:</p>
        <p>Ano:</p>
      </nav>
      <div className="calendar-weekdays">
        {weekdays.map((weekday, index) => (
          <span key={weekday + index}>{weekday}</span>
        ))}
      </div>
      <div className="calendar-days">
        {days.map(day => (
          <div key={day} className="calendar-day">
            <span>{day}</span>
          </div>
        ))}
      </div>
    </div >
  )
}