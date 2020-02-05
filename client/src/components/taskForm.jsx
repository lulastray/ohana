import React, {Component} from 'react'
import TaskServices from '../service/my-services'
import { Modal, Form, Button } from 'react-bootstrap'

export class TaskForm extends Component {

    constructor() {
        super()
        this.state = {
            task: {
                name: "",
                description: "",
                periodicity: "",
                time: "",
                value: ""
            },
            show: false
        }
        // this.handleShow = this.handleShow.bind(this) //por que el bind?
        // this.handleClose = this.handleClose.bind(this)
        this.services = new TaskServices()
    }

    handleShow = () => {
        console.log("abrir la modal")
        this.setState({ show : true })
    }
    handleClose = () => {
        console.log("cierra la modal")
        this.setState({ show: false })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            task:{
            ...this.state.task,
            [name]: value
            }
        }) 
    }

    handleSubmit = e => {
        e.preventDefault()
        this.services.createTask(this.state.task)
            .then( res => {
                console.log(res) 
                window.location.href = '/tasks' // no se porque estoy poniendo esto
            })
    }

    render() {
        return (
            <section>
                <Button className="btn btn-dark" onClick={this.handleShow}>Add new task</Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.task.name} type="text" id="name" name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.task.description} className="form-control" type="text" id="description" name="description" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Daily or weekend</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.task.periodicity} className="form-control" type="text" id="periodicity" name="periodicity" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Morning or afternoon</Form.Label>
                                <Form.Check onChange={this.handleChange} value="morning" label="Morning" type="checkbox" id="morning" name="time"/>
                                <Form.Check onChange={this.handleChange} value="afternoon" label="Afternoon" type="checkbox" id="afternoon" name="time"/>
                                
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Value</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.task.value} className="form-control" type="text" id="value" name="value" />
                            </Form.Group>
                            <button className="btn btn-success" onClick={this.handleSubmit}>Guardar</button>
                        
                        </Form>

                    </Modal.Body>

                
                </Modal>
           
            </section>
        )
    }
}



