import React, { Component } from 'react'

export class Item extends Component {
    deleteProject(id){
        this.props.onDelete(id)
    }

    render() {
        return (
            <li>
                <b>{this.props.Project.title}</b> - {this.props.Project.catagory}<button onClick={this.deleteProject.bind(this, this.props.Project.id)}>x</button>
            </li>
        )
    }
}

export default Item
