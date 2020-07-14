import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots'; // Export that aren't default incase has another variable needs to be constructed // Not needed forExternal database 
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
onSearchChange = (event) => {
this.setState({searchfield: event.target.value})
}

componentDidMount() {
    this.setState({robots: robots}); // Remove this if want external database url
}
    /*   Below is to add a external database of users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
}*/

render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filterRobots} />
            </Scroll>
        </div>
    );
}

}

export default App;