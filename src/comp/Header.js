import React ,{Component} from 'react'
class Header extends Component{
    render(){
        return(
            <div className='main-header-container'>
                <div className='name-humbergur'>
                    <h1>Lensa Gebeyehu</h1>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </button>
                </div>
                <div className='image-icons'>
                    <img alt='this'/>
                    <img alt='this'/>
                    <img alt='this'/>
                    <img alt='this'/>
                </div>
                <div className='hey-name'>
                    <h1 className='hey-h1'>Hey, I'm</h1>
                    <h1 className='name-h1'>Lensa Gebeyehu</h1>
                    <p className='hey-p'>Actor / Performer / Model</p>
                </div>
            </div>
        )
    }
}
export default Header