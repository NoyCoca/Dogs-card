import './App.css';
import Home from "./component/Pages/Home";
import Hrader from './component/Features/Header';
import Footer from './component/Features/Footer'

function App() {
  return (
    <div className="App">
      <Hrader/>
      <Home/>
      <Footer phone= "054585754" city ="Tal-Aviv" email= "dogs@gmail.com"/>
    </div>
  );
}

export default App;
