import { auth } from '../lib/firebase'

const Test = () => {
  const textClick = async () => {
    console.log(auth);
  }
  return (
    <div>
      <button onClick={textClick}>click it</button>
    </div>
  )
}

export default Test
