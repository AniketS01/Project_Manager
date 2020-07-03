import React, { Component } from 'react'
import uuid from 'uuid'


export class Addproject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps ={
        catagories:['web devolopment', 'web design', 'OOP']
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        if(this.refs.title.value === ''){
            alert('title required')
        }else{
            this.setState({
                newProject:{
                    id:uuid.v4(),
                    title:this.refs.title.value,
                    catagory:this.refs.catagory.value
                }
        }, function(){
            this.props.addProject(this.state.newProject)
        })
        }
    }

    render() {
        let catagoryOptions=this.props.catagories.map(catagory =>{
            return <option key={catagory} value={catagory}>{catagory}</option>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                   <div>
                    <lable><b>project: </b></lable>
                    <input type="text" ref="title" placeholder="title"/>
                   </div>
                   <div>
                    <lable><b>catagory: </b></lable>
                    <select ref="catagory">
                      {catagoryOptions}
                    </select>
                   </div><br/>
                    <input type="submit" value="submit"/>
        
                </form>
            </div>
        )
    }
}

export default Addproject
