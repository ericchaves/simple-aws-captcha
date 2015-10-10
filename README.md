# simple-aws-captcha (WORK IN PROGRESS).

Simple captcha written in Clojurescript to be run on AWS using Api Gateway + Lambda + ElasticCache (memcached).

## Security notes

The project.cljs file requires you provide some informations related to AWS credentials and roles.
To prevent those info from ending up into your repository you can instruct git to filter them out when commiting.
For that, after you clone the repository, you need to edit your .git/config file so it loads the .gitconfig by adding the lines below:
```
[include]
    path = ../.gitconfig
```
