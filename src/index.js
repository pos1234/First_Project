import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
//import App from './components/App.js'
import './index.css'
import Info from './components/Data.js'
import States from './components/States.js'
class Myapp extends Component{
    render(){
//const just=Info.map((data)=><App name={data.name} pag={data.id} imageUrl={data.iurl} redect={data.age} />)
    return (
        <div className="der">
           <States /> 
        </div>
    )
    }
}

ReactDOM.render(<Myapp />,document.getElementById('root'))


