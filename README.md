# GROUP4 - Movies Reviewer
                
## Description       
We are Group4, consists of Hiu Sum Jaime Yue, Spencer Cole, Ryan McCarthy.         

This is GROUP4 - Movies Reviewer, a movies web application that allows user to comment on movies.         
When you open the movies web application, you can see the year of the movie being released and its poster. 
If you log in, you can comment on the movies.      

The technologies we used in this project is Node.js, Express.js, Handlebars.js, MySql, Sequelize, Heroku and nodemailer.

Below are the links to the deployed application and this repository. Screenshots are shown in the Usage Section.

Deployed application: https://movies-group4.herokuapp.com/        
Github repository: https://github.com/RyanOfEastview/group4-movies

## Table of Contents               
-[Installation](#installation)          
-[Usage](#usage)          
-[License](#license)          
-[Contributing](#contributing)          
-[Tests](#tests)        
-[Questions](#questions)        

## Installation         
If you are setting it up in your local computer. Run "npm i" in your terminal after downloading the files. Then, set up your .env file, an example of .env file is in the Tests Section. Run "mysql -u root" in your terminal. Type your password for mysql if you set a password. After the terminal showed "mysql>", type "source db/db.sql". After seeing "Database changed", type "quit" to get out of mysql. Next, type "npm run seeds". Finally, type "npm start". To start the web application, go to your usual web browser and type "http://localhost:3001/". You will be able to see the movies web application.                

## Usage         
You can see a few movies on the homepage.           
![Homepage Preview](https://github.com/RyanOfEastview/group4-movies/blob/main/screenshots/homepagePreview.jpg "Homepage Preview")          
You can see the comments that were made on that movie if you clicked on "Comment here".            
![comment Preview 1](https://github.com/RyanOfEastview/group4-movies/blob/main/screenshots/singlePost1Preview.jpg "comment Preview 1")                      
If you logged in, you can even add your comments on the movies.                 
Here is the login Page.             
![loginPage Preview](https://github.com/RyanOfEastview/group4-movies/blob/main/screenshots/loginPagePreview.jpg "loginPage Preview")           
This is how the comment page looks after loggin in.          
![Comment Preview 2](https://github.com/RyanOfEastview/group4-movies/blob/main/screenshots/singlePost2Preview.jpg "Comment Preview 2")      


## License         
&copy; 2022 by Hiu Sum Jaime Yue, Spencer Cole and Ryan McCarthy         
 
         

## Contributing         
Hiu Sum Jaime Yue -- Handlebars, Back-end          
Spencer Cole  -- Handlebars, IMDB API          
Ryan McCarthy  --  Back-end           

## Tests         
The following is an example of .env file.           
// DB_PW is the password you set for your mysql.           
DB_NAME='group4_movies'           
DB_USER='root'           
DB_PW=''           
//Email information using mailtrap.io           
EMAIL_USERNAME = 'c4e0ec0c59cb56'           
EMAIL_PASSWORD = '312363c9cc1775'           
           
Mailtrap provides an environment for testing of email sent.           
Here is an example of getting a signup confirmation email 
using mailtrap.io.              
![mailtrap Preview](https://github.com/RyanOfEastview/group4-movies/blob/main/screenshots/mailtrapExample.jpg "mailtrap Preview") 


## Questions         
If you have any questions about the project, 
the github link and email address of one of the authors are shown below.                   
Github: [Github](https://github.com/HiuSumJaimeYue) 
& Email: [hiusumjaimeyue@cmail.carleton.ca](mailto:hiusumjaimeyue@cmail.carleton.ca)
