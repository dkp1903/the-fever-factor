# The-fever-factor

Using JS to visualize IPL datasets to present interesting insights to drive attention to India's largest fever - the Indian Premier League. 

The project was undertaken following a complete SD lifecycle process, including requirement elicitation, prioritization, development, testing and optimization, deployment using CI-CD.s

![Home page](https://i.ibb.co/d0HycDW/Capture2.png)

## Tech Stack
  - [React](https://reactjs.org/) - JavaScript library used to render 
  - [Chart.js](https://www.chartjs.org/) - 
  - [node.js](http://nodejs.org) - for the backend
  - [jQuery](http://jquery.com) - javaScript library
  - [Papaparse](https://www.papaparse.com/) - for parsing CSV files to JSON

## Dataset
  - [Dataset](https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis)  

## Deployment
  - [Fever-Factor](https://fever-factor.netlify.app)  
  

## Bonus Points Explanation
  - React was used to keep in check the time constraint
  - Use of library Papaparse for parsing data from CSV
  - It is a progressive webapp as verified on [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  
## Thought Process
  - Idea was to use the SocialCops yellow and dark grey color scheme as yellow also happens to be one of my favorite colors.
  - I searched through all the given datasets to look for attributes that would intrigue a person who knows cricket but has never watched IPL. 
  - I wanted the Navigation bar to initially be in 'full' state while browsing on desktop and in 'minimal' state while on mobile to give mobile users more space yet have menu items easily accessible in one click.
  - I was duelling over whether to choose Chart.js or D3.js for my charting library. I went with Chart.js as it provided many predefined graphs, just what I needed for my time constraint.
  - When looking for a CSV file parsing solution, papaparser was the best one I could find.
  - Making a mobile responsive website is a must in 2019. With mobile in-mind, I carefully planned my layout design. I used grid layout and flex box for most of my layout design process.
  - The top bar seemed empty, so I added a search bar that would fit in with the design scheme.
  - Used Poppins and Lato as fonts for this challenge, both being popular and modern choices. For the icons I used Font Awesome Pro.
  - I decided to add a fullscreen toggle button in the header bar because an admin panel is best viewed in fullscreen. Less clutter, the better. :)
  
## Potential New Features/Improvements
  - Storing parsed JSON data in database for faster reading.
  - Can add a loading animation while the data and graphs are loading.
  - Display more data related to players such as who won the most purple caps?
  - Make a trivia using this data to make the web app more fun and interactive.
  - Light/Dark Theme
