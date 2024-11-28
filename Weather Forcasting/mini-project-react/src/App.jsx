import Button from '@mui/material/Button'; 
//import "./App.css";
import WeatherApp from './WeatherApp';
function App() {
  let handleClick = () =>{
    console.log("Button clicked");
  }

  return (
    <>
     <WeatherApp></WeatherApp>
    </>
  )
}
 
export default App
