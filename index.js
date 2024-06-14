import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import connectToMongodb from './config/mongoose.js'
import habitsRouter from './routes/habits.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./assets'));
app.use(expressLayouts);

// Extract styles and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', habitsRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    connectToMongodb();
});
