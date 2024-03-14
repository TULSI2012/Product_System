import { Form, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { createProduct } from "../API/ProductApi";

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          "title must be letters, dashes, numbers, or spaces"
        )
        .required("Required"),

      image: Yup.string().required("Requried"),

      price: Yup.number().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createProduct(values);
        console.log("Product added successfully", response.data);
      } catch (err) {
        console.error("Failed to add Product", err);
      } finally {
        resetForm({});
      }
    },
  });

  return (
    <>
      <Container fluid className="signup-form">
        <Form method="post" action="#" onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              id="title"
              name="title"
              type="title"
              placeholder="Enter your Product title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <Form.Text className="text-muted">
                {formik.errors.title}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              id="image"
              name="image"
              type="text"
              placeholder="Enter product image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />
            {formik.touched.image && formik.errors.image ? (
              <Form.Text className="text-muted">
                {formik.errors.image}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              id="price"
              name="price"
              type="number"
              placeholder="Enter product price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <Form.Text className="text-muted">
                {formik.errors.price}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default AddProduct;
