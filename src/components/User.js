import React, { Component } from 'react'
import axios from 'axios'
import CustomModal from './ModalUser'
import Personne from './Personne'

class User extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userTable: [],
            user: {
                matricule: '',
                name: '',
                password: '',
                email: '',
                picture:''
            },
            successMessage: false,
            modal:false
        }
    }

    componentDidMount = () => {
        axios
            .get("/api/employee/")
            .then((res) => this.setState({ userTable: res.data }))
            .catch((err) => console.log(err))
        
            console.log(this.state.userTable)
      }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    tabUser = () => {
    axios
      .get("/api/employee/")
      .then((res) => this.setState({ userTable: res.data }))
      .catch((err) => console.log(err))
    }
    
    createUser = () => {
        const User = { matricule: "", name: "", password: "", email: "", picture: "" }
        this.setState({
            user: User,
            successMessage: true,
            modal:!this.state.modal
        })
    }

    handleMessage = () => {
        if (this.state.successMessage) {
            setTimeout(() => {
                return <p>
                    User create successfully
                </p>
            }, 2000)
        } else {
            return <p>
                User didn't create
            </p>
        }
    }
    
  handleSubmit = (user) => {
    this.toggle()

    if (user.id) {
      axios.put(`/api/employee/${user.id}`, user)
        .then((res) => this.tabUser())
        .catch((err) => console.log(err))
    }

    axios.post("/api/employee/", user)
      .then((res) => this.tabUser())
      .catch((err) => console.log(err))
  }


    deleteUser = (user) => {
        try {
            axios.delete(`/api/employee/${user.id}`, user)
                .then((res) => { 
                    this.refreshList()
                    this.setState({
                        successMessage : true
                    })
                })
               .catch((err) => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    editUser = (user) => {
        this.setState({user:user, modal:!this.state.modal})
    }

    showUser = () => {

        return this.state.userTable.map((user, index) => {            
            <div>
                <Personne matricule={user.matricule} name={user.name} email={user.email} img={user.picture} />
                <button className="btn btn-secondary mr-2" onClick={() => this.editUser(user)}> Edit </button>
                <button className="btn btn-danger" onClick={() => this.deleteUser(user)}> Delete </button>       
            </div>
        })   
    }

    render() {
        return (
            <main className="container">
                    <h1 className="text-uppercase text-center my-4">Welcome to your react app...</h1>
                     <div className="row">
                       <div className="col-md-6 col-sm-10 mx-auto p-0">
                         <div className="card p-3">
                           <div className="mb-4">
                             <button className="btn btn-primary" onClick={this.createUser}>
                                    create a Profil
                             </button>
                                {/* {this.state.successMessage ? <p></p> : <p></p>} */}
                           </div>
                           <ul className="list-group list-group-flush border-top-0">
                             {this.showUser()}
                           </ul>
                         </div>
                      </div>
                    </div>
                     {this.state.modal ? (
                       <CustomModal
                         user={this.state.user}
                         toggle={this.toggle}
                         onSave={this.handleSubmit}
                       />
                    ) : null}
            </main>
        )
    }
}

export default User