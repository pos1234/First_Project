import React ,{Component} from 'react'
import image1 from '../img/Snapchat-1832931725.jpg'
import image2 from '../img/IMG_20220529_213647_018.jpg'
import image3 from '../img/IMG_20220616_224203_409.jpg'
import image4 from '../img/Snapchat-75753843.jpg'
import image5 from '../img/Snapchat-311340900.jpg'
import image6 from '../img/Snapchat-1928244626.jpg'

class Images extends Component{
    render(){
        return(
            <div className='main-image-container'>
             <div className='image-content'>
                    <h1>Photos</h1>
                 </div>
                <div className='image-image'>
                    <img src={image1} alt='myself'/>
                    <img src={image2} alt='myself'/>
                    <img src={image3} alt='myself'/>
                    <img src={image4} alt='myself'/>
                    <img src={image5} alt='myself'/>
                    <img src={image6} alt='myself'/>

                </div>
               
            </div>
        )
    }
}
export default Images