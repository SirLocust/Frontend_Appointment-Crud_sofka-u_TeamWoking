import { Appointment } from './interfaces/Appointment'

const CardAppointment = (props: AppProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nombre: {props.appointment.namePatient}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Fecha: {props.appointment.date}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.appointment.building}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Medico: {props.appointment.nameDoctor}
        </h6>
        <p className="card-text">
          Motivo de consulta: {props.appointment.motiveConsult}
        </p>
        <h6 className="card-subtitle mb-2 text-muted">
          Id cita: {props.appointment.id}
        </h6>
      </div>
    </div>
  )
}

type AppProps = {
  appointment: Appointment
  key: number
}

export default CardAppointment
