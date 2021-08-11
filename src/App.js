import React, {Component} from 'react';
import Topbar from './components/topbar/Topbar';
import MainPage from './pages/MainPage';
import "../src/index.css"


class App extends Component {
    render() {
        return (
            <div>
              <MainPage/>
              <Topbar />
            </div>
        );
    }
}

export default App;