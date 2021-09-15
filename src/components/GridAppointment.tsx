import CardAppointment from './CardAppointment'
import { Appointment } from './interfaces/Appointment'

const GridAppointment = (props: AppProps) => {
  return (
    <div>
      <div className="card-grid">
        {props.appointments.map((appointmentData, index) => {
          return (
            <CardAppointment
              key={index}
              appointment={appointmentData}
              handledRefresh={props.handledRefresh}
            />
          )
        })}
      </div>
    </div>
  )
}
type AppProps = {
  handledRefresh: () => void
  appointments: Appointment[]
}

export default GridAppointment
