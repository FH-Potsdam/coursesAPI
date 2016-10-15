[![Join the chat at https://gitter.im/FH-Potsdam/coursesAPI][gitterBadge]][gitterUrl]

# Courses API
A REST API designed to create, read, update and delete study courses (CRUD).

## Prerequisites
To contribute to the development and to run the courses API, make sure you fulfill the following prerequisites:
- You have ``node (6.7.0)`` and ``npm (3.10.3)`` installed. (I recommend installing them with [nvm][nvm])
- You have both ``mongo (3.2.9)^`` and ``mongod (db version v3.2.9^)`` installed.

## Quick start

### Quick start: First setup
Clone the repository locally and move into it.
```bash
git clone https://github.com/FH-Potsdam/coursesAPI.git && cd coursesAPI
```
If you have [nvm][nvm] installed, run:
```sh
nvm use
```
Install the node dependencies (npm):
```sh
npm install
```

### Quick start: Development
Make sure ``mongod`` is running by executing the following in another terminal session:
```sh
mongod
```
If you changed the configuration of mongoDB, adapt the local configuration:
```sh
vim config/default.json
```
Now, to watch and develop run:
```sh
npm run watch
```
Try it (Example using the defaults. Adapt it to your config):
```sh
curl -i -X http://localhost:3000/courses?limit=5
```

### Quick start: Production
Start you production mongoDB server:
```sh
myProductionUser@myProductionServer(ssh)$ mongod
```
Adapt your production config
```sh
cp config/default.json config/production.json
vim config/production.json # change the config and save
```
Finally build and serve in production mode
```sh
npm run build && npm run serve
```
Try it (Example using a dummy url. Adapt it to your config):
```sh
curl -i -X http://my-online-api-server.com/courses/?limit=5
```

## Courses API data
The courses data consists of the following resources:
- :white_check_mark: **A course**: Information about a study course teached in a school at a specific semester.
- :white_medium_square: **A school**: Information about a school offering courses.
- :white_check_mark: **A teacher**: Information about a teacher acossiated to courses and schools.
- :white_check_mark: **A location**: Information about a specific location where one or many courses take place.
- :white_medium_square: **A relationship**: Information about courses dependencies. I.e. Course B requires students to first graduate the course A.

Resources with :white_check_mark: are already implemented and others are to follow.

Resources names are consistent through the whole programm. They are used for collections in the MongoDB database, for the mongoose Schemas and in the REST API urls. They are always written in lowercase and in the plural form to avoid inconsistencies and improve intuitiveness.

This enables us to improve upon existing resources easier and in a generic fashion. In the future, you will just have to add a mongoose Schema with a lowercase plural name, and automatically, an url, a collection and all CRUD actions will be available for this resource.  

To better understand how a resource is structured, refer to the documentation:
[Types, Schemas, Structure and Relationships][docDataType] WIP

# Motivation
This project has been made as project of the 2 weeks long Workshop "Creating an open sourced REST API" given by Julia Freyhoff @antsteelmule and Lucas Vogel @vogelino in the University of Applied Sciences Potsdam.

This project was done in parallel with two other projects:
- :octocat: [Data Scraper](https://github.com/FH-Potsdam/fhpCoursesScraper)
A webscraper extracting information about the courses of the University of Applied Sciences Potsdam to fill the MongoDB database.
- :octocat: [Viewer (App)](https://github.com/FH-Potsdam/coursesViewer)
An html website using the courses API to display all the available courses. This project was used as a demonstration of an API usage with ajax loading.

If you want to know more about the Project and/or the Workshop, look at our [documentation](https://fhp.incom.org/projekt/7668) (german), or get in touch with us.

## Collaborators
- [Julia Freyhoff](https://github.com/antsteelmule) — @antsteelmule
- [Lucas Vogel](https://github.com/vogelino) — @vogelino
- [Jonas Köpfer](https://github.com/topada) — @topada
- [Joseph Ribbe](https://github.com/coderwelsch) — @coderwelsch
- [Bela Kurek](https://github.com/q-rec) — @q-rec

<!--- Links -->
[gitterBadge]: https://badges.gitter.im/Join%20Chat.svg
[gitterUrl]:  https://gitter.im/FH-Potsdam/coursesAPI?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[nvm]: https://github.com/creationix/nvm
[docDataType]: #
