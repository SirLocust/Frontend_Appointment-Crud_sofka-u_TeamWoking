import { Appointment } from '../components/interfaces/Appointment'

export const getAppointment = async (): Promise<Appointment[]> => {
  const url = 'localhost:3030'

  const resp = await fetch(url)
  return resp.json as unknown as Promise<Appointment[]>
}
