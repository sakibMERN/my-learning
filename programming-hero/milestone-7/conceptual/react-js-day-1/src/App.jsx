import './App.css'
import Products from './components/produncts/Products'
import State from './components/state/State'

function App() {
  


  const information = {
    message: "secret",
    phone: "0194564448"
  }
 
  return (
    <>
      
      <h2>Hello React</h2>
      {/* <Products info = {information}></Products>  */}
      <State></State>
      
      
    </>
  )
}

export default App
