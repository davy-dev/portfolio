import logo from './logo.svg';
import './App.css';
import { Canvas,extend } from '@react-three/fiber';
import { OrbitControls,Effects } from '@react-three/drei';
import Portfolio from "./Portfolio"
import {UnrealBloomPass} from "three-stdlib"
extend({UnrealBloomPass})
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls/>
        <Portfolio />
        <Effects>
          <unrealBloomPass threshold={1} strengh={1} radius={0.5} />
        </Effects>
      </Canvas>
    </div>
  );
}

export default App;
