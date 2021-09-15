/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'

import { putAppointment } from '../helpers/putAppointment'
import { Appointment } from './interfaces/Appointment'

export default function EditCardAppointment(props: AppProps) {
  const [appointment, setAppointment] = React.useState<Appointment>({
    date: '',
    nameDoctor: '',
    namePatient: '',
    motiveConsult: '',
    building: '',
  })

  // useEffect(() => {
  //   postAppointment(appointment)
  // }, [appointment])

  const { register, handleSubmit } = useForm<Appointment>()

  const onSubmit = (data: Appointment) => {
    const newAppointment: Appointment = {
      id: props.appointment.id,
      date: props.appointment.date,
      nameDoctor: data.nameDoctor || props.appointment.nameDoctor,
      namePatient: data.namePatient || props.appointment.namePatient,
      motiveConsult: data.motiveConsult || props.appointment.motiveConsult,
      building: data.building || props.appointment.building,
    }
    setAppointment(newAppointment)
    putAppointment(newAppointment)
      .then(() => {
        props.handledRefresh()
        props.handledToggleEditing()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  console.log(appointment)

  return (
    <div className="container">
      <h1 className="h1 ">Reserva tu cita</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row my-3">
          <div className="col">
            <div className="form-group">
              <label>Doctor</label>
              <input
                placeholder={props.appointment.nameDoctor}
                {...register('nameDoctor')}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">Paciente</label>
              <input {...register('namePatient')} className="form-control" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Motivo</label>
              <input {...register('motiveConsult')} className="form-control" />
            </div>

            <div className="form-group">
              <label>Lugar</label>
              <input {...register('building')} className="form-control" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  )
}

type AppProps = {
  handledRefresh: () => void
  handledToggleEditing: () => void
  appointment: Appointment
}
