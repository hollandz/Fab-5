# Fab-5
Fab 5 Website

## Configuration

Two environment variables must be set:

* `SENDGRID_USER`
* `SENDGRID_PASSWORD`

Optionally:

* `EMAIL_RECIPIENT` -- determines to whom contact form submissions are sent

## Run Locally

* Install node: `brew install node`
* Install the app `npm install`
* Set necessary environment variables:

```bash
export SENDGRID_USER="abcd"
export SENDGRID_PASSWORD="abcd"
export EMAIL_RECIPIENT="optional@blah"
```

* Run: `npm start`
* Go to: [localhost:3000](http://localhost:3000)

## Run on Azure

Follow [this article to start](https://azure.microsoft.com/en-us/documentation/articles/web-sites-nodejs-develop-deploy-mac/). You may be able to update an existing Azure 
web app to use node instead of IIS.

Once you have an `azure` remote, you can do: `git push azure nodeJs:master` (where `nodeJs` is the name of the current branch if you don't want to push from master).

