# Erisyon Website

Erisyon Website is powered by [Middleman](http://middlemanapp.com/)

## Development setup

Get the environment ready by following these steps:

1. Install [Docker](https://docs.docker.com/get-started/#install-docker-desktop)
1. Checkout this project
1. Run `$ docker-compose up` to start the web server
1. Wait a couple of minutes while the preview web-server starts
1. Open a browser at `http://localhost:4567`

## Deploy to staging

We have a staging environment in https://erisyon.manas.dev/

To make a new deploy to that environment, push a tag (any tag) to the repository. There's a Github Action that will take care of updating the relevant S3 bucket with the static site.
