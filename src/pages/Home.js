import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // get all products function
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="row  homePage w-100">
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category</h4>
        </div>
        <div className="col-md-10 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap mt-5 container-fluid  ">
            {products?.map((p) => (
              <div className="pro-card mb-5 me-3" key={p._id}>
                <div className="pro-img">
                  <img
                    className="productImg"
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />
                  
                </div>
                <div className="pro-details">
                  <h4 className="card-title">{p?.name}</h4>
                  <p className="card-description">{p?.description}</p>
                  <h1 className="product-price">₹ {p?.price}</h1>
                    <button type="button" className="btn buyNow">
                      Add to Cart
                    </button>
                </div>
              </div>
            ))}

            {/* {products?.map((p) => (
              <div className="card m-2 " style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top p-5"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
