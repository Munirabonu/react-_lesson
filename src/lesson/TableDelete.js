import React, {useState } from 'react';
import './App.css';
import Child from '../Card';

function TableDelete() {

  const [data, setData] = useState([
    { id: 1, name: 'taqvo ziynatlagan imon', janr: 'tarix' },
    { id: 2, name: 'Ar-rohiqul Mahtum', janr: 'siyrat' },
    { id: 3, name: 'Saodat Asri qissalari', janr: 'siyrat' },
    { id: 4, name: 'Jamzuriy', janr: 'tafsir' }
  ])
  const [key, setKey] = useState('name');

  const searchData = (e) => {
    let newData = data.filter((value) => value[key].toLowerCase().includes(e.target.value.toLowerCase()));
    setData(newData);
    if (e.target.value == '') {
      setData([
        { id: 1, name: 'taqvo ziynatlagan imon', janr: 'tarix' },
        { id: 2, name: 'Ar-rohiqul Mahtum', janr: 'siyrat' },
        { id: 3, name: 'Saodat Asri qissalari', janr: 'siyrat' },
        { id: 4, name: 'Jamzuriy', janr: 'tafsir' }
      ])
    }
  }

   const DeleteData = (e) => {
      let  newData = data.filter((value) => value.id !== e);
      setData(newData)
      console.log(newData);
   }

const cheangeData = (e) => {
  setKey(e.target.value);
  console.log(e.target.value);
}


  return (
    <div className='App'>
      <Child id={key} />
      <input type="text" onChange={searchData} />
      <select name="name" id="name" onChange={cheangeData}>
        <option value="name">name</option>
        <option value="janr">Janr</option>
      </select>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Janr</th>
          <th>Ochirish</th>
        </tr>
        {
          data.map((value) => {
            return (
              <tr>
                <td>{value.id}</td>   
                <td>{value.name}</td> 
                <td>{value.janr}</td> 
                <td><button onClick={() => DeleteData(value.id)}>ochirish</button></td>
              </tr>
            )
          })
        }
      </table>

    </div>
  )
}
export default TableDelete;
