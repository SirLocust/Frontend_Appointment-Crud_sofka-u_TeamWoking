import { Appointment } from './interfaces/Appointment'

const CardAppointment = (props: AppProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nombre: namePatient</h5>
        <h6 className="card-subtitle mb-2 text-muted">Fecha: Date</h6>
        <h6 className="card-subtitle mb-2 text-muted">Lugar: building</h6>
        <h6 className="card-subtitle mb-2 text-muted">Medico: nameDoctor</h6>
        <p className="card-text">Motivo de consulta: motiveConsult</p>
        <h6 className="card-subtitle mb-2 text-muted">Id cita</h6>
      </div>
      {props.appointment}
    </div>
  )
}

type AppProps = {
  appointment: Appointment
}

export default CardAppointment
