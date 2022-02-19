import React, { useState, createContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import Link from 'next/link'


export default function InputFormCreation({ form, handleChange }) {

  // const [form, setForm] = useState({
  //   fname: "",
  //   cname: "",
  //   tarea: "",
  //   language: "",
  //   locale: "",
  //   labelPos: "",
  //   fontFam: "",
  //   fontsize: ""
  // })

  // Handles the submit e on form submit.
  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault()

    // Get data from the form.
    // In this table, the Left side is the key and the right is the value
    // Together, the key-value pair will make an object
    const data = {
      formName: e.target.fname.value,
      categoryName: e.target.cname.value,
      textArea: e.target.tarea.value,
      language: e.target.language.value,
      locale: e.target.locale.value,
      labelPosition: e.target.labelPos.value,
      fontFamily: e.target.fontFam.value,
      fontSize: e.target.fontsize.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(` ${result.data}`)
  }



  // 
  // setForm({
  //   ...form
  // })
  // alert(`The form name is: ${form.fname} and the font size is: ${form.fontsize}`)

  return (
    <><div className="App">
      <div className="d-flex justify-content-center">
        <h1>Input Form - Basic Setting</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-4 mx-2">

            <div className="input-group my-3">
              <label className="input-group-text" htmlFor="formName">Form Name</label>
              <input type="text"
                className="form-control"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                placeholder="Write your form name here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="formName" />
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="category">Category</label>
              <input type="text"
                name="cname"
                value={form.cname}
                onChange={handleChange}
                className="form-control"
                placeholder="Write your category name here"
                id="category" />
            </div>

            <div className="input-group mb-3">
              <span htmlFor="textarea" className="input-group-text">Comments</span>
              <textarea className="form-control"
                placeholder="Leave a comment here"
                id="textarea"
                aria-label="With textarea"
                name="tarea"
                value={form.tarea}
                onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="col-4 mx-2">
            <div className="input-group my-3">

              <label className="input-group-text" htmlFor="languageGroup">Language</label>
              <select className="form-select"
                id="languageGroup"
                name="language"
                value={form.language}
                onChange={handleChange}>
                <option value="">Choose One</option>
                <option value="日本語">日本語</option>
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>

            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="locationGroup">Location</label>
              <select className="form-select"
                id="locationGroup"
                name="locale"
                value={form.locale}
                onChange={handleChange}
              >
                <option selected>Choose One</option>
                <option value="日本">日本</option>
                <option value="England">England</option>
                <option value="Spain">Spain</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="labelGroup">Label Position</label>
              <select className="form-select"
                id="labelGroup"
                name="labelPos"
                value={form.labelPos}
                onChange={handleChange}>
                <option selected>Choose One</option>
                <option value="上">上</option>
                <option value="下">下</option>
                <option value="左">左</option>
                <option value="右">右</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="fontFamily">Font Family</label>
              <input type="text"
                className="form-control"
                placeholder="Please type a font here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="fontFamily"
                name="fontFam"
                value={form.fontFam}
                onChange={handleChange} />
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="fontNumber">Font Size</label>
              <input type="number"
                className="form-control"
                placeholder="Please type or select a number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="fontNumber"
                min="1"
                max="100"
                name="fontsize"
                value={form.fontsize}
                onChange={handleChange} />
            </div>


          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="button" className="btn btn-outline-secondary me-3">Cancel</button>
          <button className="btn btn-secondary">Save</button>
        </div>
      </form>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"></Script>

      <h5>Form Name is: {form.fname}</h5>
      <h5>Category Name is: {form.cname}</h5>
      <h5>Comments are: {form.tarea}</h5>
      <h5>Language Selected: {form.language}</h5>
      <h5>Location Selected: {form.locale}</h5>
      <h5>Position Selected: {form.labelPos}</h5>
      <h5>The Font is: {form.fontFam}</h5>
      <h5>The Font Size is: {form.fontsize}</h5>



      <Link
        href={{
          pathname: "create-new/second-page",
          state: form
        }}
      >
        <a>2nd Form</a>
      </Link>
    </div></>
  );
}

