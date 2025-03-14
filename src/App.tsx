import './App.css';
import {Button} from './Button';



function App() {

    return (
    <>
      <h1>This Is React TypeScript</h1>
      <div className="card">
      <Button countValue={4} countHistory={[ 1, 3, 5, 7, 9, 11 ]}/>
    </div>
    </>
  )
}

export default App
