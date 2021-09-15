export const deleteAppointment = async (id: number): Promise<boolean> => {
  const url = `http://localhost:8081/api/appointment/${id}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
  return response.ok as unknown as Promise<boolean>
}
