import React from 'react'
import { deleteAppointment } from '../helpers/deleteAppointment'
import EditCardAppointment from './EditCardAppointment'
import { Appointment } from './interfaces/Appointment'

const CardAppointment = (props: AppProps) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)

  const handledToggleEditing = (): void => {
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
            <div className="row float-right ">
              <div className="mr-2">
                <button
                  className=" btn  btn-primary  float-right "
                  onClick={() => {
                    setIsEditing(true)
                  }}
                >
                  Editar
                </button>
              </div>
              <div className="">
                <button
                  className="btn btn-danger mr-3 float-right"
                  onClick={() => {
                    if (props.appointment.id) {
                      deleteAppointment(props.appointment.id)
                        .then(() => {
                          props.handledRefresh()
                        })
                        .catch()
                    }
                  }}
                >
                  x
                </button>
              </div>
            </div>
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
