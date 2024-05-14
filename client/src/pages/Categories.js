import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div
                className={`card p-3 ${hoveredCategory === c._id ? "text-white" : ""}`}
                onMouseEnter={() => setHoveredCategory(c._id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  backgroundColor: hoveredCategory === c._id ? "grey" : "",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
