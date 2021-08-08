import React from 'react';
import Card from 'react-bootstrap/Card';



class UserCard extends React.Component{
    render(){
        return(
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.username}</Card.Title>
                        <Card.Text>{this.props.repos}</Card.Text> 
                     </Card.Body>
                </Card>
            </div>
        )
    }
}

export default UserCard;