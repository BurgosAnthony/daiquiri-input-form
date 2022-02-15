export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Both of these are required.
    // Under const data, it's the key's name you're looking for
    if (!body.formName || !body.categoryName) {
        return res.json({ data: 'Form Name or Category not found' })
    }

    // Found the name.
    res.json({ data: ` Form name is ${body.formName}, and the category is ${body.categoryName}` })
}
