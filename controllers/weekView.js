import Habits from '../models/habits.js';
import Status from '../models/status.js';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Controller to get the habits in week view
export const weekView = async (req, res) => {
    try {
        let habits = await Habits.find({}).populate('status');

        let currentDate = new Date();

        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();

        const date = `${month} ${day}`;

        res.render('./weekView', {
            habits: habits,
            currdate: date
        });
    } catch (error) {
        console.log('Error', error);
    }
};

// Controller to toggle status from week view
export const toggleStatus = async (req, res) => {
    try {
        let status = await Status.findOne({ habit: req.query.id, date: req.query.date });

        if (status.datestatus === 'None') {
            status.datestatus = 'Done';
        } else if (status.datestatus === 'Done') {
            status.datestatus = 'Not Done';
        } else {
            status.datestatus = 'None';
        }

        status.save();

        return res.redirect('back');
    } catch (error) {
        console.log('Error', error);
    }
};
