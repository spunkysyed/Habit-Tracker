import express from 'express';
const router = express.Router();
import { home, create, toggleStatus, deleteHabit } from '../controllers/home.js';
import { weekView, toggleStatus as toggleWeekStatus } from '../controllers/weekView.js';

// Route to get home page with all habits
router.get('/', home);
router.get('/dailyView', home);
// Route to create habit
router.post('/createHabit', create);
// Route to toggle Status of a habit
router.get('/toggleStatus', toggleStatus);
// Route to delete a habit
router.get('/deleteHabit/:id', deleteHabit);

// Route to display week view page with habits
router.get('/weeklyView', weekView);
// Route to toggle habit status on week page
router.get('/weeklyView/toggleStatus', toggleWeekStatus);

export default router;
