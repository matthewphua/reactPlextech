import { useState } from 'react'
// a proper place to define a component


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  if (props.feedback) {
    return (
      <div>
        <h1>statistics</h1>
        <text>good {props.good}</text>
        <br></br>
        <text>neutral {props.neutral}</text>
        <br></br>
        <text>bad {props.bad}</text>
      </div>
    )
  } else {

    return (
      <div>
        <h1>statistics</h1>
        <text>No Feedback Given!</text>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedback,setFeedback] = useState(false)
  const handleGoodButtonClick = () => {
    console.log(feedback)
    setFeedback(true);
    setGood(good+1);
  }
  const handleBadButtonClick = () => {
    setFeedback(true);
    setBad(bad+1);
  }
  const handleNeutralButtonClick = () => {
    setFeedback(true);
    setNeutral(neutral+1);
  }
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodButtonClick} text="good"></Button> 
      <Button handleClick={handleNeutralButtonClick} text="neutral"></Button> 
      <Button handleClick={handleBadButtonClick} text="bad"></Button> 

      <Statistics feedback={feedback} good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App;