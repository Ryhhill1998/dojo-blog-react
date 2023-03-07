import Navbar from "../common/components/Navbar/Navbar";
import Home from "../common/components/Home/Home";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
