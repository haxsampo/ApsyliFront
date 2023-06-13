import { useState } from 'react';
import Dropdown from './components/Dropdown'
import Notification from './components/Notification';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [chosen1, setChosen1] = useState([])
  const [chosen2, setChosen2] = useState([])

  const changeChosenValues1 = (value) => {
    setChosen1(value)
    checkLengths()
  }

  const changeChosenValues2 = (value) => {
    setChosen2(value)
    checkLengths()
  }

  const checkLengths = () => {
    if (chosen1.length !== chosen2.length) {
      setErrorMessage("pls")
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
  }

  const options = [
    { value: "atskeekki", label: "Atsteekki" },
    { value: "gootti", label: "Gootti" },
    { value: "b", label: "1" },
    { value: "a", label: "2" },
    { value: "c", label: "3" },
    { value: "d", label: "4" },
    { value: "e", label: "5" },
    { value: "f", label: "6" },
    { value: "g", label: "7" },
    { value: "h", label: "8" }
  ]



  return (
    <div className="App">
      <Notification message={errorMessage} />
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => changeChosenValues1(value)}
      />

      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => changeChosenValues2(value)}
      />
    </div>
  );
}


export default App;
