
import './App.css'
import {useConfigs} from "./lib/hooks";
import ConfigsType from "./Types/ConfigsType";

function App() {
  const configs = useConfigs()

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(configs)}
      </header>
    </div>
  )
}

export default App
