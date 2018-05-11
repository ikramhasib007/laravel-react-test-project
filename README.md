# Laravel-React Test Project with Redux
> Ikram - Ud - Daula

> Software Developer

> Some Others React.js related crafting [React.js & Redux demo](https://ikram-ud-daula.herokuapp.com/)


## Installtion
- Download the resoueces
- Open command prompt and navigate the project root in your command prompt
- Make sure composer install on your pc by using command on your prompt
```
composer -v
```
- Run the command on your prompt
```
composer install
npm install

```
- Create a Database on your local server and configure database & credential in **.env** file.
```
DB_DATABASE=(your database name)
DB_USERNAME=(server username)
DB_PASSWORD=(server password. if you have)
```
- Run the command on your prompt
```
php artisan migrate
php artisan db:seed
php artisan serve
```
Then hit `http://localhost:8000` on your browser.

## Documentation
This project is **CRUD** based **SPA** test project using *Laravel 5.6*, *Bootstrap 4*, *React.js & Redux*.

User can add a post, edit a post, delete a post, seraching a post.

Remembering that the post title is unique. you can't add duplicate post title.

The add post form are properly validated. You can't ignore the validation rules.



## Description
This test project covered possible all of the requirement that you have provided.

**I have used**

- *laravel 5.6* latest version.
- Implemented some migration flow with relationships.
- DB seeding for some dummy post category.
- Provides an API endpoint.
- *Bootstrap 4* with customization
- Multiple *Git* commit for tracking 
- I have completed Laravel and React.js part almost One and a half hours, which are not satisfying your requirement.
- *Redux* part took some time from me. I am not using Redux repository from Git which is they recommended. But I implemented a complete store for this test project with filtering, sorting, and sort between date which are not visualize but functionaly implementated. You may check the resources.
```
resources\assets\js 
                   \actions
                   \reducers
                   \selectors
                   \store
```
 - This implementation of *Redux* is self-created using `redux` and `react-redux` node module.
> Some Others *React.js* & *Redux* related crafting, please visit [React.js & Redux demo](https://ikram-ud-daula.herokuapp.com/)


