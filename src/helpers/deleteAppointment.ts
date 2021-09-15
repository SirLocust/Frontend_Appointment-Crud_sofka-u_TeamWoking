import { Appointment } from './../components/interfaces/Appointment'

export const deleteAppointment = async (
  id: number
): Promise<Appointment | string> => {
  const url = `http://localhost:8081/api/${id}}`
  const response = await fetch(url, {
    method: 'DELETE',
  })
  return response.json() as unknown as Appointment | string
}
