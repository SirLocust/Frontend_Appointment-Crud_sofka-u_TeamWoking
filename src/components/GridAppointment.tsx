import React, { useEffect } from 'react'
import { getAppointment } from '../helpers/getAppointments'
import CardAppointment from './CardAppointment'
import { Appointment } from './interfaces/Appointment'

const GridAppointment = () => {
  const [appointments, setappointments] = React.useState<Appointment[]>([])

  useEffect(() => {
    getAppointment()
      .then((appointmentsData) => {
        // console.log('hola')
        setappointments(appointmentsData)
      })
      .catch((e) => {
        console.log(e)
      })
  })

  return (
    <div>
      {console.log('se renderiso')}
      <div className="card-grid">
        {appointments.map((appointmentData, index) => {
          return <CardAppointment key={index} appointment={appointmentData} />
        })}
      </div>
    </div>
  )
}

export default GridAppointment
