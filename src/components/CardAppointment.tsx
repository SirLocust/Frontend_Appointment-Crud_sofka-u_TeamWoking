import React from 'react'
import { deleteAppointment } from '../helpers/deleteAppointment'
import EditCardAppointment from './EditCardAppointment'
import { Appointment } from './interfaces/Appointment'

const CardAppointment = (props: AppProps) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)

  const handledToggleEditing = (): void => {
    console.log('se cambio')
    setIsEditing(!isEditing)
  }
  return (
    <div className="card">
      {!isEditing && (
        <div className="card-body">
          <div>
            <h5 className="card-title">
              Nombre: {props.appointment.namePatient}
            </h5>
            <button
              onClick={() => {
                if (props.appointment.id) {
                  deleteAppointment(props.appointment.id)
                    .then(() => {
                      props.handledRefresh()
                    })
                    .catch(() => {
                      console.log('no se cumple')
                    })
                }
              }}
            >
              x
            </button>
            <button
              onClick={() => {
                setIsEditing(true)
              }}
            >
              Edit
            </button>
          </div>

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
      )}
      {isEditing && (
        <EditCardAppointment
          handledRefresh={props.handledRefresh}
          handledToggleEditing={handledToggleEditing}
          appointment={props.appointment}
        />
      )}
    </div>
  )
}

type AppProps = {
  handledRefresh: () => void
  appointment: Appointment
  key: number
}

export default CardAppointment
