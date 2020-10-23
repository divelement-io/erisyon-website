# Erisyon Website

Erisyon Website is powered by [Middleman](http://middlemanapp.com/)

## Development setup

Get the environment ready by following these steps:

1. Install [Docker](https://docs.docker.com/get-started/#install-docker-desktop)
1. Checkout this project
1. Run `$ docker-compose up` to start the web server
1. Wait a couple of minutes while the preview web-server starts
1. Open a browser at `http://localhost:4567`


## Deployemnt

### Production

Once you're happy push the current master to the `production` branch. Netlify
is scanning this branch and will deploy it when changes are made to it. It's 
recommended that you do this via master:

```
$ git checkout master
$ git fetch
$ git checkout production
$ git reset --hard origin/master
$ git push origin production
```

### Development & Previews

As always, please do development in branches and submit a PR for that work. Pull
Requests create previews on netlify. Builds are slow, but this is a low
throughput project so we'll just deal with it until it's too painful.
