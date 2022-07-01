import React ,{Component} from 'react'
import image1 from '../img/IMG_20220517_221846_462.jpg'
class Contact extends Component{
    render(){
        return(
            <div className='main-contact-container'>
            <div className='contact-image'>
                    <img src={image1} alt='myself'/>
                </div>
             <div className='contact-content'>
                    <h1>Contact</h1>
                    <h3>Representation</h3>
                    <h4>Manager</h4>
                    <p>Bruce Robertson</p>
                    <p>Email-lensa@gmail.com</p>
                    <p>Tel - +251-919-195-044</p>
                 </div>
                
                 <div className='contact-image-icons'>
                    <img alt='this'/>
                    <img alt='this'/>
                    <img alt='this'/>
                    <img alt='this'/>
                </div>
            </div>
        )
    }
}
export default Contact