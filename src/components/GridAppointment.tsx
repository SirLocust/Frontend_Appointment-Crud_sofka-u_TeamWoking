import React, { useEffect } from 'react'
import { getAppointment } from '../helpers/getAppointments'
import CardAppointment from './CardAppointment'
import { Appointment } from './interfaces/Appointment'

const GridAppointment = () => {
  const [appointments, setappointments] = React.useState<Appointment[]>([])

  useEffect(() => {
    getAppointment().then((appointmentsData) =>
      setappointments(appointmentsData)
    )
  }, [appointments])

  return (
    <div>
      <div className="card-grid">
        {appointments.map((appointmentData) => {
          ;<CardAppointment appointment={appointmentData} />
        })}
      </div>
    </div>
  )
}

export default GridAppointment
