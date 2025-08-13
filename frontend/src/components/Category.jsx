import { Col, ListGroup } from "react-bootstrap"
import  { useDispatch, useSelector } from "react-redux"
import { categorySelectors, getAllCategory, } from "../features/CategorySlice.js";
import { useEffect, useState } from "react"


const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(categorySelectors.selectAll);
  const[loading, setloading] = useState(true);

  useEffect(() => { 
    dispatch(getAllCategory())
  },  [dispatch]);

  useEffect(() => { 
    dispatch(getAllCategory()).finally(() => setloading(false));
  },  [dispatch]);
  return (
    <>
      <Col md={2}>
        <h4>Product Kategori</h4>
        <p>{loading ? "Loading..." : "" }</p>
        <hr />
        <ListGroup key="all001">
          <ListGroup.Item 
            id={`all001`} 
            className="mb-1 shadow-sm"
            active>
            All Product
          </ListGroup.Item>
        </ListGroup>
        {category &&
        category.map((item)=>(
        <ListGroup key={item.id}>
        <ListGroup.Item id={`key${item.id}`} className="mb-1 shadow-sm">
                {item.name}
          </ListGroup.Item>
        </ListGroup>
        ))}
      </Col>
    </>
  );
};

export default Category;
//. , ; : !  =>? ' " [] ]()  { } - _ = + / \ | @ # $ % ^ & * ~ `
//+ − × ÷ = ≠ < > ≤ ≥ ± √ ∞ ∑ ∏ ∆ ∂ ∫ ≈ ∝ %
//$ € £ ¥ ₩ ₫ ₹ ₱ ₴ ₭ ₦ ₲ ₪ ₵
//© ® ™ ° ‰ § ¶ •    
