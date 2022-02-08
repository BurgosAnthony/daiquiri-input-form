import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function InputFormCreation() {
  const [state, setState] = useState({
    fname: "",
    cname: "",
    tarea: "",
    language: "",
    locale: "",
    labelPos: "",
    fontFam: "",
    fSize: ""
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <><div className="App">
      <div className="d-flex justify-content-center">
        <h1>Input Form - Basic Setting</h1>
      </div>
      <form action="" >
        <div className="row justify-content-center">
          <div className="col-4 mx-2">

            <div className="input-group my-3">
              <label className="input-group-text" for="formName">Form Name</label>
              <input type="text"
                className="form-control"
                name="fname"
                value={state.fname}
                onChange={handleChange}
                placeholder="Write your form name here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="formName" />
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" for="category">Category</label>
              <input type="text"
                name="cname"
                value={state.cname}
                onChange={handleChange}
                className="form-control"
                placeholder="Write your category name here"
                id="category" />
            </div>

            <div className="input-group mb-3">
              <span for="textarea" className="input-group-text">Comments</span>
              <textarea className="form-control"
                placeholder="Leave a comment here"
                id="textarea"
                aria-label="With textarea"
                name="tarea"
                value={state.tarea}
                onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="col-4 mx-2">
            <div className="input-group my-3">

              <label className="input-group-text" for="languageGroup">Language</label>
              <select className="form-select"
                id="languageGroup"
                name="language"
                value={state.language}
                onChange={handleChange}>
                <option selected>Choose One</option>
                <option value="日本語">日本語</option>
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>

            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" for="locationGroup">Location</label>
              <select className="form-select"
                id="locationGroup"
                name="locale"
                value={state.locale}
                onChange={handleChange}
              >
                <option selected>Choose One</option>
                <option value="日本">日本</option>
                <option value="England">England</option>
                <option value="Spain">Spain</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" for="labelGroup">Label Position</label>
              <select className="form-select"
                id="labelGroup"
                name="labelPos"
                value={state.labelPos}
                onChange={handleChange}>
                <option selected>Choose One</option>
                <option value="上">上</option>
                <option value="下">下</option>
                <option value="左">左</option>
                <option value="右">右</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" for="fontFamily">Font Family</label>
              <input type="text"
                className="form-control"
                placeholder="Please type a font here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="fontFamily"
                name="fontFam"
                value={state.fontFam}
                onChange={handleChange} />
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" for="fontNumber">Font Size</label>
              <input type="number"
                className="form-control"
                placeholder="Please type or select a number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="fontNumber"
                value="12"
                min="1"
                max="100"
                name="fSize"
                value={state.fSize}
                onChange={handleChange} />
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

      <h5>Form Name is: {state.fname}</h5>
      <h5>Category Name is: {state.cname}</h5>
      <h5>Comments are: {state.tarea}</h5>
      <h5>Language Selected: {state.language}</h5>
      <h5>Location Selected: {state.locale}</h5>
      <h5>Position Selected: {state.labelPos}</h5>
      <h5>The Font is: {state.fontFam}</h5>
      <h5>The Font Size is: {state.fSize}</h5>
    </div></>
  );
}

