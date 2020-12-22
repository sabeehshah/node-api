const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


// Routes
const eventsRoute = require('./routes/api/events');

app.get('/', (req, res) => {
    res.send('Hello from node');
})

//BodyParser Middleware
app.use(express.json());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('MongoDB connected')
}).catch(err => console.log(err));

// User routes
app.use('/api/events', eventsRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))