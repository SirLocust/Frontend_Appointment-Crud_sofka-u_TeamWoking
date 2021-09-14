export const getAppointment = async (): Promise<string[]> => {
  const url = 'localhost:3030'

  const resp = await fetch(url)
  return resp.json as unknown as Promise<string[]>
}
