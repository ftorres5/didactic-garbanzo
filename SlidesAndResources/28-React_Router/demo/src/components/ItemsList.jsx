import stock from '../data';
// 👉 STEP 6 - React Router imports (useNavigate)


function ItemsList() {

  return (
   <div className="items-list-wrapper">
      {stock.map((item) => (
        <div className="item-card" key={item.id}>
            {/* 👉 STEP 6b - Navigate to the /items/<id of item path when clicking the button */}
          <button>
            <img
              className="items-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </button>

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;