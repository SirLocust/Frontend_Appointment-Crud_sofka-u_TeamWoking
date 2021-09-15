import React, { useEffect } from 'react'
import CreateCardAppointment from './components/CreateCardAppointment'
import GridAppointment from './components/GridAppointment'
import { Appointment } from './components/interfaces/Appointment'
import { getAppointment } from './helpers/getAppointments'

export const App = () => {
  const [appointments, setappointments] = React.useState<Appointment[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    getAppointment()
      .then((appointmentsData) => {
        // console.log('hola')
        setappointments(appointmentsData)
        console.log('spr')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handledRefresh = () => {
    getData()
  }
  return (
    <div className="container-fluid my-3">
      <CreateCardAppointment handledRefresh={handledRefresh} />
      <div className="container my-5  ">
        <GridAppointment
          appointments={appointments}
          handledRefresh={handledRefresh}
        />
      </div>
    </div>
  )
}
