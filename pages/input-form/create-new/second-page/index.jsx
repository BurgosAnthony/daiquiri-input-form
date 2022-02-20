import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import { Form } from "react-bootstrap"
import Link from 'next/link'



export default function secondPage({ form, handleChange }) {

    const handleSubmit = async (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        // Stop the form from submitting and refreshing the page.
        e.preventDefault()

        // Get data from the form.
        // In this table, the Left side is the key and the right is the value
        // Together, the key-value pair will make an object
        const data = {
            formName: form.fname,
            categoryName: form.cname,
            textArea: form.tarea,
            language: form.language,
            locale: form.locale,
            labelPosition: form.labelPos,
            fontFamily: form.fontFam,
            fontSize: form.fontsize,
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

    const [validated, setValidated] = useState(false);

    return (
        <><div className="App">

            <div className="d-flex justify-content-center">
                <h1>Detailed Input Form</h1>
            </div>
            <div className="d-flex justify-content-around">
                <Link href={'/input-form/create-new'}><a className="btn btn-secondary btn-circle btn-lg">1</a></Link>

                <a href="/activecore/detailed_input_form.html" className="btn btn-primary btn-circle btn-lg">2</a>
                <a href="" className="btn btn-secondary btn-circle btn-lg disabled">3</a>
            </div>
            <div className="d-flex justify-content-around">
                <p>フォームの基本設定</p>
                <p>フィールドの詳細</p>
                <p>埋め込みコードの出力</p>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="d-flex justify-content-end">
                            <a href="/activecore/input_form.html" className=""><i className="increase bi bi-plus-circle-fill"></i></a>
                        </div>

                        <div className="col-mb-3">
                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Anthony"
                                id="validationCustom01"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                required />
                            <div className="invalid-feedback">
                                Please write your first name
                            </div>
                        </div>


                        <div className="col-my-3">
                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Burgos"
                                id="validationCustom02"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                required />
                            <div className="invalid-feedback">
                                Please write your last name
                            </div>
                        </div>


                        <div className="input-group has-validation my-3">
                            <span className="input-group-text" id="basic-addon1">@
                            </span>
                            <input type="email"
                                className="form-control"
                                placeholder="メールアドレス"
                                aria-label="Email Address"
                                aria-describedby="basic-addon1"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required />
                            <div className="invalid-feedback">
                                メールアドレスお願いします。
                            </div>
                        </div>

                        <div className="col-my-3">
                            <label htmlFor="companyName" className="form-label">会社名</label>
                            <input type="text"
                                className="form-control"
                                placeholder="activecore"
                                id="companyName"
                                name="companyName"
                                value={form.companyName}
                                onChange={handleChange}
                                required />
                            <div className="invalid-feedback">
                                会社名を書いて
                            </div>
                        </div>

                        <div className="col-my-3">
                            <label htmlFor="department" className="form-label">部門</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Marketing"
                                id="department"
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                                required />
                            <div className="invalid-feedback">
                                部門を書いて
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="Position" className="form-label">役職</label>
                            <select className="form-select"
                                id="Position"
                                name="jobTitle"
                                value={form.jobTitle}
                                onChange={handleChange}
                                required>
                                <option selected disabled value="">Choose...</option>
                                <option value="ceo">CEO</option>
                                <option value="manager">Manager</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="employee">Employee</option>
                            </select>
                            <div className="invalid-feedback">
                                Please choose a position
                            </div>
                        </div>

                        <br />
                        <p>当社が提供するActivecore marketing cloud サービスに興味がありますか</p>
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                id="radioCheck0"
                                name="radioStacked"
                                value="詳しい話がききたい"
                                checked={form.radioStacked === "詳しい話がききたい"}
                                onChange={handleChange}
                                required />
                            <label className="form-check-label" htmlFor="radioCheck0">詳しい話がききたい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                id="radioCheck1"
                                name="radioStacked"
                                value="説明資料を送ってほしい"
                                checked={form.radioStacked === "説明資料を送ってほしい"}
                                onChange={handleChange}
                                required />
                            <label className="form-check-label" htmlFor="radioCheck1">説明資料を送ってほしい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                id="radioCheck2"
                                name="radioStacked"
                                value="関連するセミナーに参加したい"
                                checked={form.radioStacked === "関連するセミナーに参加したい"}
                                onChange={handleChange}
                                required />
                            <label className="form-check-label" htmlFor="radioCheck2">関連するセミナーに参加したい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio"
                                className="form-check-input"
                                id="radioCheck3"
                                name="radioStacked"
                                value="特になし"
                                checked={form.radioStacked === "特になし"}
                                onChange={handleChange}
                                required />
                            <label className="form-check-label" htmlFor="radioCheck3">特になし</label>
                            <div className="invalid-feedback">Please choose one</div>
                        </div>

                    </div>
                    <div id="blueBox" className="rounded col-auto">
                        <div id="HASH" className="blue-msg">
                            <span className="smalltext">Properties</span>
                            <a href="/activecore/detailed_input_form.html"><i className="increase bi bi-dash-circle-fill"></i></a>
                        </div>


                        <div className="input-group mb-3">
                            <span className="input-group-text" htmlFor="labelName">Label</span>
                            <input type="text"
                                className="form-control"
                                placeholder="氏名"
                                aria-label="label"
                                aria-describedby="basic-addon1"
                                id="labelName"
                                name="label"
                                value={form.label}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="FieldGroup">Field</label>
                            <select className="form-select"
                                id="FieldGroup"
                                name="field"
                                value={form.field}
                                onChange={handleChange}>
                                <option selected>Choose One</option>
                                <option selected value="1">Field1</option>
                                <option value="2">Field2</option>
                                <option value="3">Field3</option>
                                <option value="4">Field4</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="FieldGroup">Field Type</label>
                            <select className="form-select"
                                id="FieldGroup"
                                name="fieldType"
                                value={form.fieldType}
                                onChange={handleChange}>
                                <option selected>Choose One</option>
                                <option selected value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="extra large">Extra Large</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="labelWidth">Label Width</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Please type or select a number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                id="labelWidth"
                                value="120"
                                min="1"
                                max="999"
                                name="labelWidth"
                                value={form.labelWidth}
                                onChange={handleChange} />
                        </div>

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="fieldHeight">Field Height</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Please type or select a number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                id="fieldHeight"
                                value="250"
                                min="1"
                                max="999"
                                name="fieldHeight"
                                value={form.fieldHeight}
                                onChange={handleChange} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" htmlFor="placeholder">Placeholder</span>
                            <input type="text"
                                className="form-control"
                                aria-label="label"
                                aria-describedby="basic-addon1"
                                id="placeholder"
                                name="placeholder"
                                value={form.placeholder}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" htmlFor="defaultValue">Default Value</span>
                            <input type="text"
                                className="form-control"
                                aria-label="label"
                                aria-describedby="basic-addon1"
                                id="defaultValue"
                                name="defaultValue"
                                value={form.defaultValue}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="fieldHeight">Max Length</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Please type or select a number"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                id="fieldHeight"
                                value="255"
                                min="1"
                                max="999"
                                name="maxLength"
                                value={form.maxLength}
                                onChange={handleChange} />
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    必須
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <div className="invalid-feedback" >
                                    Clicking this is mandatory
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="d-flex col-12 justify-content-center mt-3">
                    <a href="/activecore/detailed_input_form.html" className="btn btn-outline-secondary me-3">Cancel</a>
                    <button type=" submit" className=" btn btn-secondary">Save</button>
                </div>
            </Form>

            <h5>Form Name is: {form.fname}</h5>
            <h5>Category Name is: {form.cname}</h5>
            <h5>Comments are: {form.tarea}</h5>
            <h5>Language Selected: {form.language}</h5>
            <h5>Location Selected: {form.locale}</h5>
            <h5>Position Selected: {form.labelPos}</h5>
            <h5>The Font is: {form.fontFam}</h5>
            <h5>The Font Size is: {form.fontsize}</h5>
            <hr></hr>
            <h5>Your First Name is: {form.firstName}</h5>
            <h5>Your Last Name is: {form.lastName}</h5>
            <h5>Your Email is: {form.email}</h5>
            <h5>Your Company Name is: {form.companyName}</h5>
            <h5>You are in: {form.department}</h5>
            <h5>You are a: {form.jobTitle}</h5>
            <h5>You chose: {form.radioStacked}</h5>
            <h5>The label is: {form.label}</h5>
            <h5>The field number is:{" "} {form.field}</h5>
            <h5>The field type is:{" "} {form.fieldType}</h5>
            <h5>The label width is:{" "} {form.labelWidth}</h5>
            <h5>The field height is:{" "} {form.fieldHeight}</h5>
            <h5>The placeholder is:{" "} {form.placeholder}</h5>
            <h5>The default value is:{" "} {form.defaultValue}</h5>
            <h5>The max length is:{" "} {form.maxLength}</h5>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"></Script>
        </div></>
    );
}