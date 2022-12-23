# Dad_Jokes

a simple project that show a joke from Joke API! to run it in your local host simply write npm run dev project directory terminal, and click at the url given!~

## Step Deployment to Heroku

### setup package.json file

- inside project directory change start command at package.json file, at scripts with like this :

```

"scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
.
.
.
}

```

### serve the build files statically
- to do this create a file called static.json with this following content :

```
{
  "root": "dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}
```

- and save the changes we made with git add . and git commit -m 

### create production build

- run npm run build

### login Heroku in your terminal

- heroku login 

### create new Heroku app

- heroku create

- also run these 2 commands

```
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
```

### execute the deploy command

- git push heroku master

### app deployment success

- access deployment app with url given at terminal



