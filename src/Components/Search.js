import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/search.css';
import UserCard from './UserCard';
const {Octokit} = require('@octokit/core');


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formInput: "",
            userData: []
        }
    }

    handleChange = (e) =>{
        this.setState({formInput: e.target.value});
        // console.log(this.state.formInput);
    }

    //Create function to send API call to github (https://api.github.com/users/{username}), values returned saved in state
    handleSubmit = async(e) => {        
        e.preventDefault()
        let username = this.state.formInput;
        let githubUrl = `https://api.github.com/users/${username}`;
        let token = process.env.REACT_APP_GITHUB_TOKEN;
        const octokit = new Octokit({auth: token})

        try{ 
            let response = await octokit.request(`GET ${githubUrl}`)
            this.setState({userData: response.data})
         }
        catch(error){
            console.log(error)
        }
        
    }


    render(){
        return(
            <div>
                <Form className='search-form' >
                    <Form.Label>Search Username</Form.Label>
                    <Form.Control className="search-input" type="text" placeholder="Enter Username To Search" onChange={this.handleChange}></Form.Control>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
                {/* Create component that shows card with users information that matches username in api call */}
                {this.state.userData &&  <UserCard username={this.state.userData.name} img={this.state.userData.avatar_url} repos={this.state.userData.repos_url} />}

            </div>
        )
    }
}

export default Search;