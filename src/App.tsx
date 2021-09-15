import CreateCardAppointment from './components/CreateCardAppointment'
import GridAppointment from './components/GridAppointment'

export const App = () => {
  return (
    <div className="container-fluid my-3">
      <CreateCardAppointment />
      <div className="container my-5  ">
        <GridAppointment />
      </div>
    </div>
  )
}
