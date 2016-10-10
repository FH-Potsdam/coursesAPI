[![Join the chat at https://gitter.im/FH-Potsdam/coursesAPI][gitterBadge]][gitterUrl]

# Courses API
A REST API designed to create, read, update and delete study courses (CRUD).

## Prerequisites
To contribute to the development and to run the courses API, make sure you fulfill the following prerequisites:
- You have [nvm][nvm] installed and installed ``node: 6.7.0`` and ``npm: 3.10.3`` OR your node and npm versions are exactly these ones. (I recommend installing them with [nvm][nvm])
- You have both ``mongo`` (3.2.9^) and ``mongod`` (db version v3.2.9^) installed on your machine

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
Instal the node dependencies (npm):
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
curl -i -X http://localhost:3000/courses/?limit=5
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
The courses data includes Schema the following datatypes:
- **A course**: Information about a study course teached in a school at a specific semester.
- **A school**: Information about a school providing courses.
- **A professor**: Information about a professor acossiated to courses and schools.
- **A location**: Information about a specific location where one or many courses take place.
- **A relationship**: Information about courses dependencies. I.e. Course B requires students to first graduate the course A.

To better understand how a course is structured, refer to the documentation:
[Data types, Data Schemas, Data Structure and data relationships][docDataType] WIP

This structure of the Schemas represent the collections that are to be found in the database as well as the resources of the REST API. This means will be found as such in the url of the requests. Example:
```sh
curl -i -X http://localhost:3000/courses/ # Request all resources
curl -i -X http://localhost:3000/courses/267849534729572394 # Request an individual resource

# This applies for any collection:
curl -i -X http://localhost:3000/courses/
curl -i -X http://localhost:3000/schools/
curl -i -X http://localhost:3000/professors/
curl -i -X http://localhost:3000/locations/
curl -i -X http://localhost:3000/relationships/
```

The name of the resources and the collection will always be written in lowercase and in the plural form to avoid inconsistencies and improve intuitiveness.

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
