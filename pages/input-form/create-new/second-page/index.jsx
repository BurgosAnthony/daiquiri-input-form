import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import Link from 'next/link'
import { Form } from "react-bootstrap"
import { useLocation } from 'react-router-dom'



export default function secondPage() {

    // const { state: { form } } = useLocation();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <><div className="App">
            {/* <h1>Form name is {state.fname}</h1> */}
            <div className="d-flex justify-content-center">
                <h1>Detailed Input Form</h1>
            </div>
            <div className="d-flex justify-content-around">
                <a href="/activecore/input_form.html" className="btn btn-secondary btn-circle btn-lg disabled">1</a>
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
                            <input type="text" className="form-control" placeholder="Anthony" id="validationCustom01" required />
                            <div className="invalid-feedback">
                                Please write your first name
                            </div>
                        </div>

                        <div className="col-my-3">
                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                            <input type="text" className="form-control" placeholder="Burgos" id="validationCustom02" required />
                            <div className="invalid-feedback">
                                Please write your last name
                            </div>
                        </div>


                        <div className="input-group has-validation my-3">
                            <span className="input-group-text" id="basic-addon1">@
                            </span>
                            <input required type="email" className="form-control" placeholder="メールアドレス" aria-label="Email Address"
                                aria-describedby="basic-addon1" />
                            <div className="invalid-feedback">
                                メールアドレスお願いします。
                            </div>
                        </div>

                        <div className="col-my-3">
                            <label htmlFor="companyName" className="form-label">会社名</label>
                            <input type="text" className="form-control" placeholder="activecore" id="companyName" required />
                            <div className="invalid-feedback">
                                会社名を書いて
                            </div>
                        </div>

                        <div className="col-my-3">
                            <label htmlFor="department" className="form-label">部門</label>
                            <input type="text" className="form-control" placeholder="Marketing" id="department" required />
                            <div className="invalid-feedback">
                                部門を書いて
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="Position" className="form-label">役職</label>
                            <select className="form-select" id="Position" required>
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
                            <input type="radio" className="form-check-input" id="radioCheck0" name="radio-stacked" required />
                            <label className="form-check-label" htmlFor="radioCheck0">詳しい話がききたい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radioCheck1" name="radio-stacked" required />
                            <label className="form-check-label" htmlFor="radioCheck1">説明資料を送ってほしい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radioCheck2" name="radio-stacked" required />
                            <label className="form-check-label" htmlFor="radioCheck2">関連するセミナーに参加したい</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radioCheck3" name="radio-stacked" required />
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
                            <input type="text" className="form-control" placeholder="氏名" aria-label="label"
                                aria-describedby="basic-addon1" id="labelName" />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="FieldGroup">Field</label>
                            <select className="form-select" id="FieldGroup">
                                <option selected>Choose One</option>
                                <option selected value="1">Field1</option>
                                <option value="2">Field2</option>
                                <option value="3">Field3</option>
                                <option value="4">Field4</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="FieldGroup">Field Type</label>
                            <select className="form-select" id="FieldGroup">
                                <option selected>Choose One</option>
                                <option selected value="1">Small</option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
                                <option value="4">Extra Large</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="labelWidth">Label Width</label>
                            <input type="number" className="form-control" placeholder="Please type or select a number"
                                aria-label="Username" aria-describedby="basic-addon1" id="labelWidth" value="120" min="1"
                                max="999" />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="fieldHeight">Field Height</label>
                            <input type="number" className="form-control" placeholder="Please type or select a number"
                                aria-label="Username" aria-describedby="basic-addon1" id="fieldHeight" value="250" min="1"
                                max="999" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" htmlFor="placeholder">Placeholder</span>
                            <input type="text" className="form-control" aria-label="label" aria-describedby="basic-addon1"
                                id="placeholder" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" htmlFor="defaultValue">Default Value</span>
                            <input type="text" className="form-control" aria-label="label" aria-describedby="basic-addon1"
                                id="defaultValue" />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="fieldHeight">Max Length</label>
                            <input type="number" className="form-control" placeholder="Please type or select a number"
                                aria-label="Username" aria-describedby="basic-addon1" id="fieldHeight" value="255" min="1"
                                max="999" />
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    必須
                                </label>
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <div className="invalid-feedback" />
                                Clicking this is mandatory
                            </div>
                        </div>
                    </div>

                </div>



                <div className="d-flex col-12 justify-content-center mt-3">
                    <a href="/activecore/detailed_input_form.html" className="btn btn-outline-secondary me-3">Cancel</a>
                    <button type=" submit" className=" btn btn-secondary">Save</button>
                </div>
            </Form>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"></Script>
        </div></>
    );
}