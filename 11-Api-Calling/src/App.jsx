import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {

    const response = await axios.get(
      'https://countries.dev/region/Asia'
    )

    console.log(response.data)

    setData(response.data)
  }

  const formatPopulation = (population) => {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(population);
  };  

  return (
    <div id='main'>
      <div id='header'>
        <h2>Asia Countries Explorer</h2>
        <button onClick={getData}>Get Countries</button>
      </div>
      

      <div id='container'>
        {data.slice(1, 46).map(function(elem, idx) {
          return (
            <div id='cards'  key={idx}>
              <img src={elem.flags.png} alt="xyz" />
              <h2>{elem.name}</h2>
              <h3>Capital : <span>{elem.capital}</span> </h3>
              <p>Population: <span>{formatPopulation(elem.population)}</span></p>
               <p>Currency: <span> {elem.currencies?.[0]?.name} - {elem.currencies?.[0]?.symbol} </span></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;