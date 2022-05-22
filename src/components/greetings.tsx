import { useGreetings } from "../hooks/useGreetings"

function Greetings() {
  const { data, error } = useGreetings();
  if(error) {
      return <div>Error 🚀 </div>
  }
  if(!data) {
    return <div>Loading.... </div>
  }
  return (
    <div>Greetings from server : {data.message}</div>
  )
}

export default Greetings