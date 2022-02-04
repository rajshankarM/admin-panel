import React from "react";
import { Link } from "react-router-dom";
import "./product.css"
import Chart from "../../../companents/chart/Chart"
import { productData } from "../../../dummyData"
import {Publish} from "@material-ui/icons"

export default function Product() {
  return (
  <div className="product">
      <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
          <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" alt="" className="productInfoImg" />
                  <span className="produstName">MacBook</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1234</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">slaes:</span>
                      <span className="productInfoValue">5234</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in Stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="MacBook"/>
                  <label>In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg" alt="" className="productUploadImg"/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input typeof="file" id="file" style={{display:"none"}}/>
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
  </div>
  );
}
