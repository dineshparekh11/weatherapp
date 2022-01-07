import React, {useEffect, useState} from "react";
import "./css/style.css";
const Weatherapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] =useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=bc7071aa4baecb2ef4c3bddd7a165f95`
            //api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=bc7071aa4baecb2ef4c3bddd7a165f95`
            const response = await fetch(url);
            const resJson = await response.json();
           // console.log(resJson);
           setCity(resJson.main);
        };
        
        fetchApi();
    },[setSearch] )
    return (
        <>
        <div className="box">
           <div className="inputData">
               <input
               type="search"
               value={search}
               className="inputFeild"
               onChange={(event) => { setSearch(event.target.value)}}/>

           </div>

       {!city ? (
           <p className="erroMsg">No Data Found</p>
       ) : (
        <div>

        <div className="info">
        <h2 className="location">
        <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
        {city.temp}°Cel
        </h1>
           <h3 className="tempmin_max">Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel</h3>
        </div>
        <div className= "wave -one"></div>
        <div className= "wave -two"></div>
        <div className= "wave -three"></div>

        </div>
       
        )}
        
        </div>
        </>
        
    )
}

export default Weatherapp;