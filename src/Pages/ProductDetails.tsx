import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return <div>Product Screen</div>;
}
export default ProductDetails;
