import React,{Component} from 'react'
class States extends Component{
           Constructor(){
            super()
            this.state={
                name:'girma',
                age:'20'
            }
        } 
        render(){

        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.age} years old</h2>
            </div>
        )
    }
}
export default States