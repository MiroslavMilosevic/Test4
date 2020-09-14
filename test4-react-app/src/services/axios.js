import axios from 'axios'


export function getAllCountries(){

    return axios.get('https://restcountries.eu/rest/v2/all')
}

// export function getByRegion(){

//     return('')
// }

// 1. Приликом учитавања, приказују се заставе свих држава (img) (само заставе)
// 2. Постоји селект где можемо бирати државе на основу региона (континента)
// Напомена: Уместо селекта можете користити дугмиће
// На одабир државе, на страници остају само државе изабраног региона и приказују се
// додатне информације
// Име, застава, популација
// Africa, Americas, Asia, Europe, Oceania