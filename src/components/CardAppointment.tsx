const CardAppointment = (props: AppProps) => {
  return (
    <div>
      <p>{props.appointment}</p>
    </div>
  )
}

type AppProps = {
  appointment: string
}

export default CardAppointment
