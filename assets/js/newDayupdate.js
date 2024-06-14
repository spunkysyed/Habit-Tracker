import Habits from '../../models/habits.js';
import Status from '../../models/status.js';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

(async () => {
  try {
    let currentDate = new Date();
    let previousDate = currentDate;

    while (true) {
      currentDate = new Date();

      if (currentDate.getDate() !== previousDate.getDate()) {
        console.log('function run');

        const month = monthNames[currentDate.getMonth()];
        const day = currentDate.getDate();
        const formattedDate = `${month} ${day}`;

        const dateToRemove = new Date(previousDate);
        dateToRemove.setDate(dateToRemove.getDate() - 7);
        const RemoveMonth = monthNames[dateToRemove.getMonth()];
        const RemoveDay = dateToRemove.getDate();
        const RemoveDate = `${RemoveMonth} ${RemoveDay}`;

        let habits = await Habits.find({});

        for (let habit of habits) {
          let status = await Status.findOne({ date: RemoveDate, habit: habit._id });

          if (status) {
            let dateID = status._id;

            await Status.deleteOne({ _id: dateID });
            await Habits.findByIdAndUpdate(habit._id, { $pull: { status: dateID } });
          }

          let newStatus = await Status.create({
            date: formattedDate,
            datestatus: 'None',
            habit: habit._id
          });

          habit.status.push(newStatus._id);
          await habit.save();
        }
      }

      previousDate = currentDate;

      await delay(60000);
    }
  } catch (error) {
    console.log('Error', error);
  }
})();
