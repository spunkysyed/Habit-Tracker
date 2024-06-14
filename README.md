# Habit-Tracker

HabitTracker is a sophisticated web application meticulously crafted to assist users in effectively tracking their habits both on a daily and weekly basis. Whether you're aiming to establish new routines or maintain existing ones, HabitTracker offers seamless functionality. Users can effortlessly add and manage habits, categorize them as Done, Not Done, or Not Started by default, and review their progress through an intuitive Weekly View. Changes made in the status of habits are instantly reflected on the Daily View, ensuring up-to-date monitoring and accountability. For further customization and detailed insights into your habits, HabitTracker provides a user-friendly interface accessible at all times through any web browser.

## Installation

To run this application on your local machine, please follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/spunkysyed/Habit-Tracker.git

2. Install the required dependencies:
   ```bash
    npm install

3. Create a .env file and store:
   ```bash
   MONGODB_URL=<MongoDB atlas connection string>

4. Start the application:
   ```bash
   npm start

5. Open the application:
   ```bash
    http://localhost:4000


## Usage

1. Selecting and Adding Habits:
    - Choose existing habits or add custom habits by typing in the text box.

2. Tracking Habit Status:
    - Mark habits as Done, Not Done, or Not Started (default).

3. Deleting Habits:
    - Remove habits that are no longer needed.

4. Weekly View:
    - View and track habit status for the past week.

5. Changing Status Icons:
    - Change habit statuses for the current date or the past 7 days using icons under the dates.

6. Status Icons:
    - Red icon: Shows habit is not completed
    - Green icon: Shows habit is completed
    - Grey icon: Shows habit is not started

7. Automatic Updates:
    - Changes made to habit status for the current date are automatically reflected on the Daily View page.

## Folder Structure:
```bash
HabitTracker/
│
├── assets/              # Frontend assets
│   ├── css/             # CSS files
│   │   ├── header.css   # Styles for the navbar
│   │   ├── home.css     # Styles for the home page
│   │   ├── layout.css   # Styles for the layout page
│   │   └── weeklyview.css # Styles for the weekly view page
│   └── js/              # JavaScript files
│       ├── home.js      # Client-side scripts for the home page
│       └── newDayUpdate.js # Logic for adding a new day and displaying the previous 6 days
│
├── config/              # Configuration files
│   └── mongoose.js      # Database connection configuration using Mongoose
│
├── controllers/         # Controller logic
│   ├── home.js          # Controller handling home-related logic
│   └── weekView.js      # Controller handling weekView-related logic
│   
├── models/              # Database models
│   ├── habit.js         # Schema for Habit model
│   └── status.js        # Schema for Status model
│
├── routes/              # Route definitions
│   └── habits.js        # Main routes for the application
│
├── views/               # Views rendered by the server
│   ├── header.ejs       # EJS template for the navbar
│   ├── home.ejs         # EJS template for the home page
│   ├── layout.ejs       # EJS template for the layout page
│   └── weeklyView.ejs   # EJS template for the weekly view page
│
├── index.js             # Entry point of the application
│
├── package-lock.json    # Lock file for npm package versions
├── package.json         # npm package configuration
│
└── README.md            # Project documentation
