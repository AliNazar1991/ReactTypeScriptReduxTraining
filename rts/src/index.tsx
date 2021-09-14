import ReactDOM from "react-dom";
import GuestList from './state/guestlist'
const App = () => {
    return (<div>
        <GuestList />
    </div>);
};

ReactDOM.render(<App />, document.querySelector('#root'))