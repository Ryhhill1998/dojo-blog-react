import Navbar from "../common/components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
