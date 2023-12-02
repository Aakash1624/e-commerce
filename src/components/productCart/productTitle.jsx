import { FaLongArrowAltRight } from 'react-icons/fa';
const ProductTitle = (props) => {
  return (
    <div className="item-title">
      <h3 className="title">
        {props.names}
        <FaLongArrowAltRight />
      </h3>
    </div>
  );
};
export default ProductTitle;
