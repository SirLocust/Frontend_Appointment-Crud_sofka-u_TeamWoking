import { Appointment } from './interfaces/Appointment'

const CardAppointment = (props: AppProps) => {
  return (
    <div>
      <p>{props.appointment}</p>
    </div>
  )
}

type AppProps = {
  appointment: Appointment
}

export default CardAppointment
