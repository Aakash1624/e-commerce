// import CatCard from './categories';
import './categories.css';

const CatProduct = (catProps) => {
  return (
    <main className="cat-main">
      <div className="cat-item">
        <div className='img-title'>
          <h3>{catProps.name}</h3>
          <img
            src={catProps.image}
            alt=""
            className="cat-image"
          />
        </div>
        <div className="addCart-container">
          <button className="btn-ShopNow">Shop Now</button>
        </div>
      </div>
    </main>
  );
};

export default CatProduct;
