import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap'

export default class CustomModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            image: [],
            imagesUpload: [],
        }
    }

    handleChange = (e) => {
        let userInfos = e.target.value
        this.setState({
            user:userInfos
        })
    }

    handleChangeImage = (e) => {
        let images = URL.createObjectURL(e.target.files[0])
        let imageUp = e.target.files[0]
        this.setState({
            image: [...this.state.image, images],
            imagesUpload:[...this.state.imagesUpload , imageUp]
        })
        console.log(this.state)
    }

    render() {
        const { toggle, onSave } = this.props
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create user</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='matricule'>Matricule</Label>
                            <Input type='text' id='matricule' name='matricule' value={this.state.user.matricule} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Nom</Label>
                            <Input type='text' id='name' name='name' value={this.state.user.nom} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input type='email' id='email' name='email' value={this.state.user.email} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='picture'>Picture</Label>
                            <Input type='file' id='picture' onChange={this.handleChangeImage} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.user)}>save</Button>
                </ModalFooter>
            </Modal>
        )
    }
}