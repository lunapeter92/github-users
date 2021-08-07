import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/search.css'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formInput: ""
        }
    }

    handleChange = (e) =>{
        this.setState({formInput: e.target.value});
        console.log(this.state.formInput);
    }

    //Create function to send API call to github (https://api.github.com/users/{username}), values returned saved in state

    render(){
        return(
            <div>
                <Form className='search-form'>
                    <Form.Label>Search Username</Form.Label>
                    <Form.Control className="search-input" type="text" placeholder="Enter Username To Search" onChange={this.handleChange}></Form.Control>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                {/* Create component that shows card with users information that matches username in api call */}


            </div>
        )
    }
}

export default Search;