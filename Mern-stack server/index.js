
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

let submittedForms = [];

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('IT is Running')
})

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const formData = { name, email, message };
    submittedForms.push(formData);
    console.log('Received form data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.sendStatus(200);
});

app.get('/submitted-forms', (req, res) => {
    res.json(submittedForms);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
