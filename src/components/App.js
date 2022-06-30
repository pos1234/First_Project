import React, {Component} from 'react'
class App extends Component{
    render(){
    return (
        <div>
            <h1 className="heads">{this.props.name}</h1>
            <p>{this.props.pag}</p>
            <img className='images' src={this.props.imageUrl}/>
            <a href={this.props.link}>{this.props.redect}</a>
        </div>
    )
    }
}
export default App