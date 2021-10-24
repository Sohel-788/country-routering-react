
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName}=useParams();
    const [country,setCountry]=useState([]);
    const {name,flags,capital,continents,population,currencies,languages,postCode,region,subregion,startOfWeek,timezones,borders}=country;
    console.log(country)
    useEffect(()=>{
        const url=`https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[countryName, setCountry])
    // go back by useHistory hook
    const history=useHistory();
    const goBackHndle=()=>{
        history.push('/countries')
    }
    return (
        <div className='mt-5'>
            
             <img src={flags?.png} alt="" />
            <h2 className='mt-1'>Name: {name?.common}</h2>
            <h6>Official Name: {name?.official}</h6>
            <h6>Capital Name: {capital?.[0]}</h6>
            <h6>Continents Name: {continents?.[0]}</h6>
            <h6>Region Name: {region}</h6>
            <h6>Sub Region Name: {subregion}</h6>
            <h6>Population: {population}</h6>
            <h6>Languages: {languages?.fra}, {languages?.hat}</h6>
            <h6>PostCode: {postCode?.regex}</h6>
            <h6>Start of week: {startOfWeek}</h6>
            <h6>Time zone: {timezones?.[0]}</h6>
            <h6>Currency Name: {currencies?.HTG?.name}</h6>
            <h6>Currency Symbol: {currencies?.HTG?.symbol}</h6>
            <h6>Borders: {borders?.[0]} {borders?.[1]} {borders?.[2]} {borders?.[3]}</h6>
            {/* <small>
            <iframe src={maps?.googleMaps} frameborder="0" title='This is country map'></iframe>
            </small> */}
            <Button onClick={goBackHndle} className='success'>Go Back</Button>
            
        </div>
    );
};

export default CountryDetail;