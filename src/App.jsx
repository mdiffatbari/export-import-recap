import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';
// import { add, diff, divide as div, mul } from './utils/math/math'

function App() {
  // const sum = add(2, 3);
  // const difference = diff(5, 2);
  // const multiply = mul(4, 6);
  // const divide = div(4, 2);
  // console.log(sum, difference, multiply, divide);

  //fetch bottles data from api
  const bottlesPromise = fetch("./bottles.json").then(res => res.json());


  return (
    <>
      <h1>Bottle Shop</h1>

      <Suspense>
        <Bottles bottlesPromise = {bottlesPromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
