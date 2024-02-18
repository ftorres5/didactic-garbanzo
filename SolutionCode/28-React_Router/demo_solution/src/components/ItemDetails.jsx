import stock from '../data';
// 👉 STEP 7 - React Router imports (useParams)
import {useParams} from 'react-router-dom'


function ItemDetails() {
    // 👉 STEP 7b - get the item id from the url parameters
    const {itemId} = useParams();

   // 👉 STEP 7c - Using the id from the params and the array of items called stock get the item based on the matching id.
   const item = stock.find(stockItem => stockItem.id === parseInt(itemId))

  return (
    <section className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
        <p className="item-description">{item.description}</p>
      </section>
  );
}

export default ItemDetails;