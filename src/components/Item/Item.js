import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Item.css'
import {Link} from 'react-router-dom'



const Item = (props) => {

    const { id, title, description, price, pictureUrl } = props;

    
    return <Card  style={{ width: '18rem' }}> 
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
         <Button>  <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Ver más</Link></Button> 
        </Card.Body>
    </Card>;

}

export default Item;