import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Item.css'
import '../ItemListContainer/ItemListContainer'



const CardItem = (props) => {

    const { id, title, description, price, pictureUrl } = props;

    return <Card  style={{ width: '18rem' }}> 
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">Ver más</Button>
        </Card.Body>
    </Card>;

}

export default CardItem;