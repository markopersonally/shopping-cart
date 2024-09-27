export default function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-warning">Who We Are</h3>
          <p>
            Welcome to our e-commerce store! We are passionate about offering a
            diverse range of high-quality products to meet your needs. Our
            mission is to provide an exceptional shopping experience that
            combines convenience, quality, and great customer service.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="text-warning">Our Values</h3>
          <ul>
            <li>
              <strong>Quality:</strong> We ensure all our products meet the
              highest standards.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Your happiness is our top
              priority.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously improve our product
              range to bring you the latest trends.
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="text-warning">Why Choose Us?</h3>
          <p>
            With our user-friendly interface, secure payment options, and a
            dedicated support team, we make your online shopping experience
            seamless and enjoyable. Join our community of satisfied customers
            and discover the best products at the best prices.
          </p>
        </div>
      </div>
    </div>
  );
}
