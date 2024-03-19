import './App.css';
import { RecoilRoot } from 'recoil';
import { Rive } from './Rive';
import { GraphicsOverlay } from '../../component/battle/GraphicsOverlay';

function App() {
  return (
    <RecoilRoot>
      <GraphicsOverlay />
      <Rive />
    </RecoilRoot>
  );
}

export default App;
