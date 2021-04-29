import React , {Component} from 'react'

class Login extends  Component{
    constructor(props){
        super(props)
        this.state = {
            field : {
                email: '',
                password:'',
            }
        }

        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange =this.handleChange.bind(this)
    }

    handleChange(e){
        let tabValue = this.state.field
        tabValue[e.target.name] = e.target.value
        this.setState({
            field:tabValue
        })
        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault()
        //faire le traitement avec les token ici
    }

    render(){
        return <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.field["email"]} onChange={this.handleChange} placeholder="xyz@yahoo.fr"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password"  value={this.state.field["password"]} onChange={this.handleChange} />
                        </div>
                    </div>
                    <input type="submit" value="Envoyer" className = 'btn btn-primary' />
                </form>
            </div>
    }
}

export default Login

