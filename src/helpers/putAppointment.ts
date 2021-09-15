import { Appointment } from './../components/interfaces/Appointment'

export const putAppointment = async (
  appointment: Appointment
): Promise<Appointment | string> => {
  const url = 'http://localhost:8081/api/appointment'
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  })
  return response.json() as unknown as Appointment | string
}
