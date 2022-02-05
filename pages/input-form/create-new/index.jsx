import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "pages/inputForm1Color.css"


export default function InputFormCreation() {
  return (
    <><div className="App">
      <div className="d-flex justify-content-center">
        <h1>Input Form - Basic Setting</h1>
      </div>
      <form action="" method="POST">
        <div className="row justify-content-center">
          <div className="col-4 mx-2">
            <div className="input-group my-3">
              <label className="input-group-text" for="formName">Form Name</label>
              <input type="text" className="form-control" placeholder="Write your form name here"
                aria-label="Username" aria-describedby="basic-addon1" id="formName" />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="category">Category</label>
              <input type="text" className="form-control" placeholder="Write your category name here"
                id="category" />
            </div>

            <div className="input-group mb-3">
              <span for="textarea" className="input-group-text">Comments</span>
              <textarea className="form-control" placeholder="Leave a comment here" id="textarea"
                aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="col-4 mx-2">
            <div className="input-group my-3">
              <label className="input-group-text" for="languageGroup">Language</label>
              <select className="form-select" id="languageGroup">
                <option selected>Choose One</option>
                <option selected value="1">日本語</option>
                <option value="2">English</option>
                <option value="3">Español</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="locationGroup">Location</label>
              <select className="form-select" id="locationGroup">
                <option selected>Choose One</option>
                <option selected value="1">日本</option>
                <option value="2">England</option>
                <option value="3">Spain</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="labelGroup">Label Position</label>
              <select className="form-select" id="labelGroup">
                <option selected>Choose One</option>
                <option selected value="1">上</option>
                <option value="2">下</option>
                <option value="3">左</option>
                <option value="4">右</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="fontFamily">Font Family</label>
              <input type="text" className="form-control" placeholder="Please type a font here" aria-label="Username"
                aria-describedby="basic-addon1" id="fontFamily" />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="fontNumber">Font Size</label>
              <input type="number" className="form-control" placeholder="Please type or select a number"
                aria-label="Username" aria-describedby="basic-addon1" id="fontNumber" value="12" min="1"
                max="100" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="button" className="btn btn-outline-secondary me-3">Cancel</button>
          <button type="submit" className="btn btn-secondary">Save</button>
        </div>
      </form>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    </div></>
  );
}

