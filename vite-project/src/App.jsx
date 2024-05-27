
import './App.css';
import logo from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';
import background from './assets/discord-background.png';


function App(){
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt="Logo" className='logo' />
        <img src={menu} alt="Menu" className='menu'/>
      </header>
      <div src={background} className='discored-background' >
        <div className='content'>
          <h1>IMAGE A PLACE...</h1>
          <p> ...where you can belong to a school club, a gaming group, or a worldwide
          art community. Where just you and a handful of friends can spend time
          together. A place that makes it easy to talk every day and hang out more
          often.</p>
        </div>
        <button id="download-btn">Download for Mac</button>
        <button id='browser-btn'>Open Discord in your browser</button>
        <div className="background">
        <img src={background} alt="Discord Background"  id='background-img'/>
      </div>
      </div>
      
    </div>
  );
}
export default App;