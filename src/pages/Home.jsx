import logo from "../assets/main_logo.png"
import '../pages/Home.css'
function Home() {
  return (
    <div className="container">
      <div><img src={logo} alt="main logo" className="logo" /></div>
      <h1>Welcome to <span className="cyan">ShareCal</span></h1>
      <h2>calendar <span className="cyan">sharing</span> and <span className="cyan">collaboration</span> platform</h2>

    </div>
  );
}

export default Home;
