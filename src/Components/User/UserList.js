import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import './User.css';


const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [data]);


    return (
        <div className='users'>
            {
                data.map((user) => (
                    <Card key={user.id} style={{ width: '18rem' }} className='carde'>
                        <Card.Img variant="top" src="user.jpg" />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                email: {user.email}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                            <ListGroup.Item>Website: {user.website}</ListGroup.Item>
                            <ListGroup.Item>Company Name: {user.company.name}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))
            }
        </div>
    );
}

export default UserList