import React, { Component } from 'react'
import './App.css'
import Projects from './components/Projects'
import Addproject from './components/Addproject'
import uuid from 'uuid'


class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[]
    }

  }

  componentWillMount(){
    this.setState({
      projects:[]
    })
  }

  handleAddProject(project){
    this.setState({
      projects:[...this.state.projects, project]
    })
  }
  handleDelete(id){
    let projects = this.state.projects
    let index = projects.findIndex(value => value.id === id)
    projects.splice(index, 1)
    this.setState({projects:projects})
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Addproject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDelete.bind(this)} Projects={this.state.projects}/>
      </div>
    )
  }
}

export default App

