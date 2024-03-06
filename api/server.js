import express from 'express';

const app = express();
app.use('/', (req, res, next) => {
    res.send('Welcome to the first api eduaction online')
})
const port = 3000

app.listen(3000 , () => {
    console.log('listening on port ' + `http://localhost:${port}`);
})