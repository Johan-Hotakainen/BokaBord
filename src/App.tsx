import {reformulateDate} from "./utilities/dateFormatter"

function App() {

  return (
    <>
    <p>{reformulateDate("getHours")}</p>
    <p>{reformulateDate("getSeconds")}</p>
    </>
  )
}

export default App
