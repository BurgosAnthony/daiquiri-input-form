import 'pages/inputForm1Color.css'
import '@styles/common.css';
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [form, setForm] = useState({
    fname: "",
    cname: "",
    tarea: "",
    language: "",
    locale: "",
    labelPos: "",
    fontFam: "",
    fontsize: "",
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    department: "",
    jobTitle: "",
    radioStacked: "",
    label: "",
    field: "",
    fieldType: "",
    labelWidth: "",
    fieldHeight: "",
    placeholder: "",
    defaultValue: "",
    maxLength: ""
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Component {...pageProps}
      form={form}
      handleChange={handleChange}
    />
  )
}

export default MyApp;