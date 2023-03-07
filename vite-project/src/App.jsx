import { useState } from 'react'
import './App.css'

import Counter from './Counter'
import Form from './Form'
import Header from './Header'
import User from './User'

function App() {
  const [data, setData] = useState(['Per', 'Olav', 'Trond'])
  const handleData = (newData) => setData([...data, newData])
  const dataList = data.map(name => <User user={name}/>)
  return (
    <div className="App">
      <Header />
      <Form addData={handleData}/>
      <div id='users'>
        {dataList}
      </div>
      <Counter />
    </div>
  )
}

export default App
