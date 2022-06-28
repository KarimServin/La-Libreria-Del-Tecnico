
import './ItemDetail.css'
const ItemDetail = props => {


    const{title,id,price,pictureUrl,description,key} = props;
    

       

    return <article className="ItemDetail">
        
        <img src={pictureUrl}></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <h5>  ${price} </h5>    
        </article>

}
 
export default ItemDetail;

