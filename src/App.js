import React,{useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_key="818fddbf83cc894c1ea5ce63404ebdad";
const App=()=>{
  const[city,setCity]=useState("");
  const[result,setResult]=useState("");
  const changeHandler=(e)=>{
      setCity(e.target.value);
  }
  const submitHandler=(e)=>{
  e.preventDefault();
//console.log(city);
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
.then(
  response=>response.json()
).then(data=>{
  const kelvin=data.main.temp;
  const celcius=kelvin-273.15;
  setResult(`Temperature at ${city}\n${Math.round(celcius)}°C`);
  setCity("");//to empty clear the input
}).catch(error=>console.log(error))
  }

  return(
    <div>
      <center>
        <div className="card">
          <div className="card-body">
           <h4 className="card-title">Weather Application</h4>
           <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange={changeHandler} placeholder="Enter the city"/><br/><br/>
          <input type="submit" value="Get Temperature"/>
           </form>
           <br/>
           <h2>{result}</h2>
          </div>
        </div>
      </center>
    </div>
  );


}
export default App;