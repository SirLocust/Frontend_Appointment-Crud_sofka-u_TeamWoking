import { Appointment } from '../components/interfaces/Appointment'

export const getAppointment = async (): Promise<Appointment[]> => {
  const url = 'http://localhost:8081/api/appointment'

  const resp = await fetch(url)
  const data = await resp.json()

  return data as Promise<Appointment[]>
}
