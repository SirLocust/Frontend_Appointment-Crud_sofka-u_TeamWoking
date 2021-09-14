import { Appointment } from './../components/interfaces/Appointment'

export const postAppointment = async (
  appointment: Appointment
): Promise<Appointment | string> => {
  const url = ''
  const response = await fetch(url, {
    body: JSON.stringify(appointment),
  })
  return response.json as unknown as Appointment | string
}
