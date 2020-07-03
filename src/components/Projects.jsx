import React, { Component } from 'react'
import Item from './Item'

export class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id)
    }

    render() {
        let projectItems;
        if(this.props.Projects){
            projectItems = this.props.Projects.map(project => {
              return(
                <Item onDelete={this.deleteProject.bind(this)} key = {project.title} Project={project}/>
                )
            })
        }
    return (
            <div>
              <h2>my projects</h2>
                {projectItems}
            </div>
        )
    }
}

export default Projects
