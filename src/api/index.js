import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    try {
        let changeableUrl = url;
        
        if(country) changeableUrl = `${changeableUrl}/countries/${country}`;
        
        const response = await axios.get(changeableUrl);
        const {
            data: { confirmed, deaths, recovered, lastUpdate },
        } = response;

        return { confirmed, deaths, recovered, lastUpdate };
    } catch (error) {
        console.error(error);
    }
};



export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)

    } catch (error) {
        console.error(error);
    }
}