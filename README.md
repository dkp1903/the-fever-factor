# The-fever-factor

The project was a limited time attempt to create a visualization web app for stats relating to the Indian Premier League. 

Stakeholder(Primary) : A person who's not interested in following IPL, and there's need to woo him using data.

Requirement : A robust and efficient front-end application, that can parse data from the CSV dataset available and analyze the most catchy stats to generate interest in the stakeholder.
Using JS to visualize IPL datasets to present interesting insights to drive attention to India's largest fever - the Indian Premier League. 

The project was undertaken following a complete SD lifecycle process, including stakeholder identification, requirement elicitation, prioritization, development, testing and optimization, deployment.

![Home page](https://i.ibb.co/d0HycDW/Capture2.png)

## Tech Stack
  - [React](https://reactjs.org/) - JavaScript frontend library
  - [ChartJs](https://www.chartjs.org/) - JavaScript library for charts
  - [Node.js](http://nodejs.org) - Runtime Environment
  - [Papaparse](https://www.papaparse.com/) - for parsing CSV files to JSON

## Dataset
  - [Dataset](https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis)  

## Deployment
  - [Fever-Factor](https://fever-factor.netlify.app)  
  

## Bonus Points Explanation
  - React was used to keep in check the time constraint, since I am still a beginner at Vue, and strongly believed that this project could be given more justice by me, if I used React.
  - ChartJS was used for easy rendering of charts from the data, which again, helped keep in check the time limit.
  - Use of library Papaparse for parsing data from CSV
  - PWA, as verified on [Lighthouse](https://developers.google.com/web/tools/lighthouse) with 
      - Offline support
      - HTTPS secured
      - Fully responsive 
  
  
## Process
1. The primary stakeholder in the time-bound project was a user with an attention to the UI and visualization, so as to ensure retentivity enough to lead to a call-to-action.

2. Color scheme was chosen primarily keeping in mind the blue brand color of Atlan, while introducing alternate color backgrounds for maximum visual impact.

3. The first step was to figure out the different ways the data can be modelled so as to woo the user : Mainly showing the large scale of IPL, the number of wins, and the teams.

4. Next step was to prioritize the implementations of the various visualizations.

5. The top priority Information blocks and charts were created.

6. This was followed by optimizing the UI to be fully responsive, using service worker for offline support.

7. The app was deployed using Netlify.

8. The other features were then added in incremental fashion.


## Potential New Features/Improvements
  - Viewing individual team performance
  - A dropdown for a user to view comparative one-on-one performance.
  - Adding a Dark Theme

![](./img/ff-1.PNG)