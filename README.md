# Job Search (vue assessment)

## Overview

This project is part of an assessment for a job application to Hikru.
It includes a responsive app for browsing IT job postings.
Users can search jobs by title and/or location and once the results are fetched, they can also filter by expertise level, order by date or salary, and search again with diferent parameters.
It is possible to view detailed information for a job clicking in its card and apply to it filling a form that mocks its submission by logging the data to the console.

## Technologies used

- **Vue.js 3**: Composition API for bluilding componets and views.
- **Pinia**: State management for managing application state.
- **Vue Router**: Handling navigation between views.
- **Jest**: Unit testing for key components ans store logic.
- **Bootstrap**: Toolkit for global styling and grid composition.
- **Vuetify**: Component library for small visual UI animations.
- **SASS**: Custom styling for the application.

## Project structure

```plain text
public/
└── api/            # JSON files for mocking API
src/
├── components/     # Reusable components
├── routes/         # Vue Router configuration
├── stores/         # Pinia store for state management
├── styles/         # Custom style sheets
└── views/          # Page components
tests/
└── unit/           # Unit test for components and store
```

## Installation

Before installing make sure you have the lastest version of Node and npm (Node v22.11.0 and npm v10.9.0 recommended).
1. Clone the repository:
```bash
git clone https://github.com/AlexisCastroB/vue-assessment
```
2. Navigate to the proyect directory:
```bash
cd vue-assessment
```
3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run serve
```
5. Open your broswer and visit `http://localhost:8080` (or the port specified in your setup).

## Usage

- **Browse jobs:** Search by title or location to view the jobs matching your criteria at `/`
- **Filter and order jobs:** Use the filter to narrow down job postings and the order select to order the list by date or salary at `/jobs`
- **View details:** Click on a job card to view detailed information at `/jobs/:id`
- **Apply for job:** Click on the Apply Now button, fill out the form on the job details page and submit (log to the console).

## Testing

Unit tests are written using Jest. To run the tests:
```bash
npm run test:unit
```

## Authorship

Developed by Alexis Castro
[GitHub Profile](https://github.com/AlexisCastroB)
[LinkedIn Profile](https://www.linkedin.com/in/alexis-cb/)
