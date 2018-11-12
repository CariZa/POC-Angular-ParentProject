# ComponentsParent

## Project Notes

Installed with 

    $ ng new ...

The purpose of this POC is to demo a parent project which is a high level "dumb" structured project, which imports other repos with more specific structures

## TDD

Still following basic TDD practices.

Run tests:

    $ npm test

## linking to external repos

https://github.com/CariZa/POC-Angular-HeaderComponents/

## Referencing other repos

External Repo: 

https://github.com/CariZa/POC-Angular-HeaderComponents/

In package.json add references:

    ...
    "dependencies": {
        ...
            "header-components": "git@github.com:CariZa/POC-Angular-HeaderComponents.git"
        ...
    },
    ...

# Refs

https://www.youtube.com/watch?v=4u9_kdkvTsc