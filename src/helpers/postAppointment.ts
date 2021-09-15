import { Appointment } from './../components/interfaces/Appointment'

export const postAppointment = async (
  appointment: Appointment
): Promise<Appointment | string> => {
  console.log(appointment, 'objeto ')
  const url = 'http://localhost:8081/api/appointment'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  })
  return response.json() as unknown as Appointment | string
}
