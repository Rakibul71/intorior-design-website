import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="background-image">
      <div className="container">
        <div className="row py-4">
          <div className="col">
            <h3 className="status">
              Build Your Dream Home With Two Sketch !!!
            </h3>
          </div>
        </div>
        <div className="row">
          <h3 className="contact-heading">Contact Form</h3>
          <div className="col col-md-6 offset-md-3">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <textarea
                  name="address"
                  id="add"
                  cols="30"
                  rows="3"
                  className="form-control"
                ></textarea>
              </div>
              <div className="buttons">
                <button className="btn btn-success mt-1">Submit</button>
                <button className="btn btn-danger mx-3 mt-1">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
