import React ,{Component} from 'react'
import image1 from '../img/Snapchat-1969520859.jpg'
class About extends Component{
    render(){
        return(
            <div className='main-about-container'>
                <div className='about-image'>
                    <img src={image1} alt='myself'/>
                </div>
                <div className='about-content'>
                    <h1>About Me</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                     It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                     Feel free to drag and drop me anywhere you like on your page.
                     I’m a great place for you to tell a story and let your users know a little more about you.</p>
                     <p>
                     This is a great space to write a long text about your company and your services.
                      You can use this space to go into a little more detail about your company. 
                      Talk about your team and what services you provide. 
                      Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. 
                     Make your company stand out and show your visitors who you are.  
                     </p>
                     <button>View Full Resume</button>
                </div>
            </div>
        )
    }
}
export default About