import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './comp/Header'
import './style.css'
class Myapp extends Component{
    render(){
    return (
        <div className="der">
           <Header />
        </div>
    )
    }
}

ReactDOM.render(<Myapp />,document.getElementById('root'))


