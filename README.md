# simple-aws-captcha (WORK IN PROGRESS).

Simple captcha written in Clojurescript to be run on AWS using Api Gateway + Lambda + ElasticCache (memcached).

## Running tests/developing

To run tests once call ```lein doo node test```.
To run tests while developing call ```lein doo node test auto```.
To run a nodejs based repl in second terminal call ```lein trampoline noderepl```

## Deploying

Deployment assumes you have aws-cli properly set and configured at least a default credentials profile.
You need to edit the project.clj file and inform you account id for the aws lambda execution role and inform the aws profile to be used (if other than default).

Then call ```lein cljs-lambda deploy```

For more information check the awesome [cljs-lambda plugin](https://github.com/nervous-systems/cljs-lambda).

## Security notes

The project.cljs file requires you provide some informations related to AWS credentials and roles.
To prevent those info from ending up into your repository you can instruct git to filter them out when commiting.
For that, after you clone the repository, you need to edit your .git/config file so it loads the .gitconfig by adding the lines below:
```
[include]
    path = ../.gitconfig
``` 
