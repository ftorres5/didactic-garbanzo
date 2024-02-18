import { useState } from 'react'
import './App.css'

function App() {
  const [numberBank, setNumberBank] = useState([])
  const [odds, setOdds] = useState([])
  const [evens, setEvens] = useState([])
  const [formVal, setFormVal] = useState()

  function determineIfEvenOrOdd(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }

  function handleAddNumber(e) {
    e.preventDefault()
    setNumberBank([...numberBank, formVal]);
  }
  function handleChange(e) {
    setFormVal(e.target.value);
  }

  function handleSortOne() {
    const firstEle = numberBank[0];
    const isEven = determineIfEvenOrOdd(firstEle);
    if (isEven) {
      setEvens([...evens, firstEle])
    } else {
      setOdds([...odds, firstEle])
    }
    numberBank.shift();
    setNumberBank([...numberBank])
  }

  function handleSortAll() {
    const newEvens = [];
    const newOdds = [];
    for (let i = 0; i < numberBank.length; i++) {
      if (determineIfEvenOrOdd(numberBank[i])) {
        newEvens.push(numberBank[i])
      } else {
        newOdds.push(numberBank[i])
      }
    }
    setEvens(evens.concat(newEvens))
    setOdds(odds.concat(newOdds))
    setNumberBank([])
  }

  return (
    <>
    <div id="outer">
    <form>
      <label>
        Add a Number to the Bank
        <input onChange={(e) => handleChange(e)} name="number" type="number" />
      </label>
      <button onClick={(e) => handleAddNumber(e)}>Add Number</button>
    </form>
      <section id="numberBank">
        <h1>Number Bank</h1>
        <output>{numberBank.map((num, i) => {
          return (
          <p key={i}>{num}</p>
          )
        })}</output>
        <div>
          <button onClick={() => handleSortOne()} id="sortOne">Sort 1</button>
          <button onClick={() => handleSortAll()} id="sortAll">Sort All</button>
        </div>
      </section>
      <section id="sortedNumbers">
        <h1>Sorted Numbers</h1>
        <section id="odds">
          <h2>Odds</h2>
          <output>{odds}</output>
        </section>
        <section id="evens">
          <h2>Evens</h2>
          <output>{evens}</output>
        </section>
      </section>
      </div>
  </>
  )
}

export default App
