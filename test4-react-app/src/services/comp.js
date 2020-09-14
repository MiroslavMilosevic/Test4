import React, { useEffect, useState } from 'react';

export const Country=({src, name, population, duzina})=>{
           const [dugme, setDugme] = useState(false)

    return(
        <>
        <div><img src={src} width='100px' height='100px' alt='slika se nije ucitala'></img>
        <button onClick={()=>setDugme(!dugme)}>Detalji</button>
        </div>
        
    <p>{dugme===true? name : null}</p>
    <p>{dugme===true? population: null}</p>
     
        </>
    )
}

export const Selekt=({ nizz, setDuzinaa, duzinaa, setRegion, region})=>{
             useEffect(()=>{
                    console.log(region)
                    //console.log();
             },[region])

    return(
        <>
        <select onChange={(e)=>{
           setRegion(e.target.value); 
           setDuzinaa(nizz.filter(el=>el.region===e.target.value).length)
         //  region=='all'? 
          // console.log(duzinaa);
        }}>
           <option value='all'>all</option> 
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
        </>
    )
}
// Africa, Americas, Asia, Europe, Oceania