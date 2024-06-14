import Habits from '../models/habits.js';
import Status from '../models/status.js';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Controller to get the habits and render it in the home.ejs file
export const home = async (req, res) => {
    try {
        let habits = await Habits.find({}).populate('status');
        let currentDate = new Date();

        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();

        const date = `${month} ${day}`;

        res.render('./home', {
            habits: habits,
            currdate: date
        });
    } catch (error) {
        console.log('Error', error);
    }
};

// Controller to create the habit in the database
export const create = async (req, res) => {
    try {
        let nameValue = req.body.habits ? req.body.habits : req.body.custom_meal;
        let habit = await Habits.findOne({ name: nameValue });

        if (habit) {
            console.log('Habit Already Exists');
            return res.redirect('back');
        }

        habit = await Habits.create({
            name: nameValue
        });

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - i);

            const month = monthNames[currentDate.getMonth()];
            const day = currentDate.getDate();

            const formattedDate = `${month} ${day}`;

            let date = await Status.create({
                date: formattedDate,
                datestatus: 'None',
                habit: habit._id
            });
            habit.status.push(date);
        }
        habit.save();

        return res.redirect('back');
    } catch (error) {
        console.log('Error', error);
    }
};

// Controller to toggle the habit status: done, notdone, None
export const toggleStatus = async (req, res) => {
    try {
        let currentDate = new Date();

        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();

        const date = `${month} ${day}`;

        let status = await Status.findOne({ habit: req.query.id, date: date });

        status.datestatus = req.query.status;
        status.save();

        return res.redirect('back');
    } catch (error) {
        console.log('Error', error);
    }
};

// Controller to delete the habit in the database
export const deleteHabit = async (req, res) => {
    try {
        let habit = await Habits.findById(req.params.id);
        habit.deleteOne();

        await Status.deleteMany({ habit: req.params.id });

        res.redirect('back');
    } catch (error) {
        console.log('Error', error);
    }
};
