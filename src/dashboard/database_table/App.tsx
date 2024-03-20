import './App.css';
import { RecoilRoot } from 'recoil';
// import { Tables } from '../../component/tables/Tables';
import { Foo } from '../../component/tables/foo';

function App() {
  return (
    <RecoilRoot>
      <Foo />
    </RecoilRoot>
  );
}

export default App;
