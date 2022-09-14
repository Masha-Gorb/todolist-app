import React, {useEffect, useState} from 'react';

export const TestPage = () => {

  const [todos, setArr] = useState([])

  useEffect(() => {
    fetch('https://6321e013fd698dfa29017213.mockapi.io/todolists').then((res) => {
      return res.json()
    }).then((arr) => {
      console.log(arr)
      setArr(arr)
    })
  }, [])


  return (
    <div>
      <h1>It is test page</h1>
      {JSON.stringify(todos)}
      <button onClick={() => {console.log(todos)}}>click</button>
    </div>
  )
}
