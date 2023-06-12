import Dropdown from './components/Dropdown'


const App = () => {


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
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />

      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}


export default App;
