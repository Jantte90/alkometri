import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [kg,setKG] = useState(90)
  const [bottles,setBottles] = useState("1")
  const [hours,setHours] = useState("1")
  const [gender,setGender] = useState("male")
  const [alcohol,setResult] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    let alcohol = 0;
    let litre = 0
    let grams = 0
    let burning = 0
    let gramsresult = 0

    if (gender === 'male') {
      litre = bottles * 0.33
      grams = litre * 8 * 4.5
      burning = kg / 10
      gramsresult = grams - (burning * hours)

      alcohol = gramsresult / (kg * 0.7)
    }
    else{
      litre = bottles * 0.33
      grams = litre * 8 * 4.5
      burning = kg / 10
      gramsresult = grams - (burning * hours)

      alcohol = gramsresult / (kg * 0.6)
    }
    if (alcohol < 0) {
      alcohol = 0

    }
    setResult(alcohol);


  }




  return (
    <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood levels</h3>
      <div>
        <label>Weight </label>
        <input type ="number" value={kg} onChange={e => setKG(e.target.value)}/>
      </div>
      <div>
      <label>Bottles </label>
      <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div>
      <label>Time </label>
      <select name="hours" value={hours} onChange={e => setHours(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
      <div>
        <label>Gender </label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>{alcohol.toFixed(1)}</output>
      </div>
      <button type='button' onClick={handleSubmit}>Calculate</button>
    </form>
  );
}

export default App;
