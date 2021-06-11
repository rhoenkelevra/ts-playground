import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Typescript');
});
app.post('/', (req, res) => {
    res.json();
});

app.listen(port, () => {
    console.log(`🚀 App is running on port ${port}`);
});
