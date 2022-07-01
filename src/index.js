import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './comp/Header'
import About from './comp/About'
import Showreel from './comp/Showreel'
import Images from './comp/Images'
import Contact from './comp/Contact'
import './style.css'
class Myapp extends Component{
    render(){
    return (
        <div className="der">
           <Header />
           <About />
           <Showreel />
           <Images />
           <Contact />
        </div>
    )
    }
}

ReactDOM.render(<Myapp />,document.getElementById('root'))


