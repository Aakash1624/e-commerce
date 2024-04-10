import './icon.css';

const Whatsapp = () => {
  return (
    <div>
      <a href="https://wa.me/6383017428">
        <img
          className="whatImg"
          src="https://static.vecteezy.com/system/resources/previews/018/930/746/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
          alt=""
        />
        whatsapp me
      </a>
      <a href="tel:6383017428">
        <img
          className="whatImg"
          src="https://img.freepik.com/free-vector/phone_78370-560.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais"
          alt=""
        />
        Call me
      </a>
    </div>
  );
};

export default Whatsapp;
