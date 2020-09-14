import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {getAllCountries} from './services/axios'
import {Country, Selekt} from './services/comp'
import {v1 as uuid} from 'uuid'

 

const App = () =>{

const [niz, setNiz] = useState([]);
const [duzina, setDuzina] = useState(0);
//const [niz2, setNiz2] = useState([]);
const [region, setRegion] = useState('all');


useEffect(()=>{
getAllCountries().then(res=>{
console.log('prvi useefectttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt');

  setNiz(res.data)
})
},[])



return(
  <>
  <div>
    <Selekt  nizz={niz} setDuzinaa={setDuzina} duzinaa={duzina} setRegion={setRegion} region={region}/>
    {region!=='all'? niz.filter(elf=>elf.region===region).map(el=>{return <Country key={uuid()} src={el.flag}
     name={el.name} population={el.population} duzina={duzina} /> }):
     niz.map(el=>{return <Country key={uuid()} src={el.flag} 
     name={el.name} population={el.population} duzina={duzina}/>})
     }
  </div>
  </>
)


}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


