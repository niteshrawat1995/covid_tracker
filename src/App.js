import React, { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';

import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png'

function App() {
  
  const [data, setData] = useState({})
  const [country, setCountry] = useState("")

    useEffect(() => {
      const fetchApi = async () => {
        const fetchedData = await fetchData()
        setData(fetchedData)
      }
      fetchApi()
    }, [])

    const handleChange = async (country) => {
      console.log(country)
      setCountry(country)
      setData(await fetchData(country))
    }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      < Cards data={data}/ >
      < CountryPicker handleChange={handleChange}/>
      < Chart data={data} country={country}/>

    </div>
  );
}

export default App;
