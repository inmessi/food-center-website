## Simple website on a random food center and deploying to heroku 

**Tools used**
- [Nodejs](https://nodejs.org/en/) ([Express](https://expressjs.com/), [ejs](https://ejs.co/), [path](https://nodejs.org/api/path.html))
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

#

In order to run this nodejs app the following steps should be carried out:
```
$ git clone https://github.com/inmessi/food-center-website.git
$ cd food-center-website
$ npm install 
```
### Running locally
You can run this app on [http://localhost:80](http://localhost:80) by running the command <br/>
```
$ npm start 
```
### Deploying to heroku 
- Link to heroku: [https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps) 
- Create a Procfile and write 'web: node index.js' inside 
- Open the above mentioned link and then go to terminal to type the following:
```
$ heroku create
$ git push heroku master 
$ heroku open
```
