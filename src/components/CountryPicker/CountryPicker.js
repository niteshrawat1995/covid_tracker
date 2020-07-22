import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

const CountryPicker = (props) => {
    const { handleChange } = props
    const [countryList, setCountryList ] = useState([])

    useEffect(() => {
        
        const fetchApi = async () => {
            const fetchedData = await fetchCountries()
            setCountryList(fetchedData)
        }
        fetchApi()
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value="">Global</option>
                { countryList.map((country, index) => <option value={country} key={index}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
