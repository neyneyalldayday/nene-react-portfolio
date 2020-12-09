
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <main>
        <Title/>
        <Name/>
        <Nene/>
        <Chips/>
     
      </main>   
  
    </div>
  );
}

const Nene = () => {
  return <article>
    <Image></Image>
    </article>};
const Image = () => < img src = "DSC08779.jpg"
alt = "" />
const Chips = () => {
  return <p>eats chips</p>;

};
const Name = () => <h1>Nene</h1>;
const Title = () => <h1>Portfolio</h1>;
const Navbar = () => <nav className = "navbar"> 
                      <ul className="navbar-nav">
                        <li className= "nav-item">
                          <a href= "#" className="nav-link">
                            <i className = "fas fa-cat"><path fill="currentColor" className="fa-secondary"></path></i>  
                            <span className="link-text"></span>
                            
                          </a>
                        </li>
                      </ul>
                    </nav>;



export default App;
