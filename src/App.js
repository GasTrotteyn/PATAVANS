import "./App.css";
import Layout from "./containers/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Options from "./Pages/ConversionOptions/ConversionOptions";
import Gallery from "./Pages/Gallery/Gallery";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    let routes = (
        <Switch>
            <Route path="/conversions" component={Options} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
        </Switch>
    );

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="App">
                <Layout>{routes}</Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
