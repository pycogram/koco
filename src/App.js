import logo from './logo.svg';
import './App.css';
import { Page } from './Page';

const objIcon = {
  tg: require('./icon/tg.png'),
  x: require('./icon/twitter.png'),
  ray: require('./icon/ray.png'),
  dext: require('./icon/dext.png'),
  dexs: require('./icon/dexs.png')
}
const objImg = {
  logo1: require('./pic/logo1.jpg'),
  logo2: require('./pic/logo2.jpg'),
  logo3: require('./pic/logo3.jpg')
}
const objGif = {
  gif1: require('./gif/gif1.gif'),
  gif2: require('./gif/gif2.gif'),
  gif3: require('./gif/gif3.gif')
}

const testImg = require('./icon/dexs.png');

function App() {
  return (
    <div className="App" >
      < Page objIconPro = {objIcon} objImgPro = {objImg} objGifPro = {objGif} />
    </div>
  );
}

export default App;
