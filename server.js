const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use(express.static('public')); // middleware function to serve static files

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));