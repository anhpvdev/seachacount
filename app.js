require('dotenv').config();
const express = require('express');
const app = express();
const roleRoutes = require('./routes/roleRoutes');

const accountRoutes = require('./routes/acountRouter');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// app.use('/role/', roleRoutes);

app.use('/account/', accountRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
