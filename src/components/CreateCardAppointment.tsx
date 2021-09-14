/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'
import { Appointment } from './interfaces/Appointment'

export default function CreateCardAppointment() {
  const [appointment, setAppointment] = React.useState<Appointment>({
    date: '',
    nameDoctor: '',
    namePatient: '',
    motiveConsulta: '',
    building: '',
  })

  const { register, handleSubmit } = useForm<Appointment>()

  const onSubmit = (data: Appointment) => {
    console.log(data)

    setAppointment(data)
  }

  console.log(appointment)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Doctor</label>
      <input {...register('nameDoctor')} />
      <label>Paciente</label>
      <input {...register('namePatient')} />
      <label>Motivo</label>
      <input {...register('motiveConsulta')} />
      <label>Lugar</label>
      <input {...register('building')} />
      <button type="submit">Enviar</button>
    </form>
  )
}
