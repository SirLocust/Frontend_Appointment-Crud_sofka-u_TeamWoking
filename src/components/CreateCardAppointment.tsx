import React from 'react'

export default function CreateCardAppointment() {
  const [appointment, setappointment] = React.useState<string>('')

  const handleAdd = () => {
    setappointment(appointment)
  }
  handleAdd()

  return <form action=""></form>
}
