#Travel Site
Work in a group of four to create a travel site for a travel agent.


##MVP
1. User can create a profile
2. Profile has photos of herself, age, and how much money she has
3. Countries are created and have data. You can go inside the country and create cities. Each city has details
4. When you click on the city, the travel agent can see all of the information for the city including the up to date weather.
..* Use Yelp API to see restaurants
5. When User books a trip, money goes from her account to the city's account


##Models
1. User/Person (who wants to go on a trip)
* name
* age
* gender
* how much money they have
* cities = [ list of cities user has purchased ]
* photo

> At the bottom of the user page, there will be links to different cities
> In the database for cities, you will not be storing objects. You will be storing ids.

2. Country
+ name
+ photos
+ cities = []
+ balance (this increases as people visit each of the cities in the country)

> cities will have links to the specific city page
> In the database for cities, you will not be storing objects. You will be storing ids.


3. City
* name
* photo
* balance (this increases when people visit )
* amount of money it costs to visit the city
* country id
* people = [ people who have purchased tickets to visit the city ]

>There will be a link to the country the city belongs to on the page
> In the database for People, you will not be storing objects. You will be storing ids.


##Methods

1. Need real time weather
2. Need yelp reviews

##Form

When a user is ready to purchase a trip, there will be a form with a country, a city, and a submit button (purchase). This is up to the developer to decide where this form goes.


###Helpful Links
+ [.populate](http://mongoosejs.com/docs/populate.html)
+ [There is a node module called Yelp](https://www.npmjs.com/package/yelp)
+ [Weather Map API](http://openweathermap.org/current)
