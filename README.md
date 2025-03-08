# Barista Quiz App - "On My Grind"

## Overview
Have you ever wanted to work at Starbucks? This app is inspired by Wordle, where you memorize coffee drink recipes and quiz yourself on a random real (and possibly discontinued 😉) Starbucks drink's temperature, flavor, milk type, and blendedness. The app will let you know if you're a natural at barista-ing.

## Features
### Required Features
- One drink at a time is displayed.
- Users can select one option for each of the four categories: Temperature, Milk, Syrup, and Blended.
- The selected option populates into the box above, replacing any previous selection.
- Clicking **“Check Answer”** submits the user's selection to be checked for correctness.
- After submission, each answer box turns red if incorrect and purple if correct.
- Clicking **“New Drink”** generates a new drink and clears the input boxes.

### Stretch Features
- Users can type in their response instead of selecting an option.
- Typed inputs are validated against the predefined choices.

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd barista-quiz-app
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Application
```sh
npm run dev
```
The app will start at `http://localhost:5173/`

## Project Structure
```
barista-quiz-app/
│── src/
│   ├── Components/
│   │   ├── BaristaForm.jsx
│   │   ├── RecipeChoices.jsx
│   ├── App.jsx
│   ├── drinks.json
│   ├── App.css
│── public/
│── index.html
│── package.json
│── vite.config.js
```

## Usage
1. Click **New Drink** to generate a random drink order.
2. Select or type ingredients in the four categories.
3. Click **Check Answer** to verify correctness.
4. Incorrect answers will be highlighted in red; correct ones in purple.
5. Click **New Drink** to try another drink.

## Technologies Used
- React.js (Vite Setup)
- Tailwind CSS
- JavaScript (ES6+)

## Future Enhancements
- Timer-based challenges.
- High score leaderboard.
- More drink variations.

## License
This project is licensed under the MIT License.