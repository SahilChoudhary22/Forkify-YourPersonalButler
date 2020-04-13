# Forkify-YourPersonalButler
An app written in JS which helps you search your favourite recipes and add them to your cart in the required quantity.

## Screenshot
![](https://i.ibb.co/hmRVZC9/forkifyfin.jpg)

## Modules used
- Webpack
- Babel
- Axios
- Uniqid


## Features 

![](https://i.ibb.co/ScjhXrx/feat1.png)
- Like your favourite recipes and they get stored to the localStorage. 
- They persist in the memory even when the site is opened at a later point in time.

![](https://i.ibb.co/Qf4rKv0/feat2.png)
- The Recipes are paginated according the the data received from the API.

![](https://i.ibb.co/q1fK2xf/feat3.jpg)
- Change the serving quantity 
- Get Directions on how to cook it. 
- Add the ingredients to your shopping list/Cart.
- Remove items from the shopping list.
- Change quantity of items in the shopping list.

## API
[Forkify API](http://forkify-api.herokuapp.com/)

- Search through the API - 
```
https://forkify-api.herokuapp.com/api/search?q=pizza
```
Here 'pizza' is our example query text.

- Get a particular recipe from the API - 
```
https://forkify-api.herokuapp.com/api/get?rId=47746
```
Here '47746' is our example recipe ID
