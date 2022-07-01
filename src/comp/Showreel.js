import React ,{Component} from 'react'
import image1 from '../img/IMG_20220517_221846_462.jpg'
class Showreel extends Component{
    render(){
        return(
            <div className='main-show-container'>
             <div className='show-content'>
                    <h1>Showreel</h1>
                 </div>
                <div className='show-image'>
                    <img src={image1} alt='myself'/>
                </div>
               
            </div>
        )
    }
}
export default Showreel