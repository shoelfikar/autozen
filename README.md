<h2 align="center">Autozen API</h2>



![abcd](https://img.shields.io/badge/Code%20Style-Standard-green) [![Release Version](https://img.shields.io/badge/release-v.1.0-blue)](https://github.com/shoelfikar/Backend-book-library-expressjs/releases/tag/1.0) [![Node JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://nodejs.org/en/)


<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents

* [Prerequiste](#Prerequiste)
* [Installation](#Installation)
* [Create Environment Variable](#create-environment-variable)
* [Start Development Server](#Start-Development-Server)
* [Link Collection Postman](#Link-Collection-Postman)
* [Structur Folder](#Structur-Folder)
* [Contributing](#Contributing)
* [Contact](#Contact)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Apache Kafka - Download and Install [Apache Kafka](https://kafka.apache.org/)
- Sequelize - Download and Install [Sequelize](https://sequelize.org/)

## Installation
### Clone
```
$ git clone https://github.com/shoelfikar/autozen.git
$ cd autozen
$ npm install
```

## Create Environment Variable
```
$ touch .env
$ nano .env
```

```
PORT = YOUR_PORT
KAFKA_HOST_URL = YOUR_KAFKA_HOST_URL
EMAIL = YOUR_EMAIL
EMAIL_PASS = EMAIL_PASS



```

## Start Development Server
```
$ npm run dev
```
## End Point API
```
1.http://localhost:{port}/api/v1/autozen/ ====> Root end point
2.http://localhost:{port}/api/v1/autozen/user/register ===> Create User
3.http://localhost:{port}/api/v1/autozen/inspector/register ===> Create inspector
4.http://localhost:{port}/api/v1/autozen/message/send/:id ===> Send post inspection
```

## Structur Folder
```
\---autozen
|    \---Configs
|    |   +---config.json            
|    \---controllers
|    |   +---inspectors.js
|    |   +---messages.js
|    |   +---users.js
|    \---helpers
|    |   +---helpers.js
|    |   +---sendMail.js
|    \---kafka
|    |   +---consumer.js
|    |   +---producer.js
|    \---models
|    |   +---index.js
|    |   +---inspector.js
|    |   +---message.js
|    |   +---post.js
|    |   +---user.js
|    \---routers
|    |   +---index.js
|    |   +---inspectors.js
|    |   +---messages.js
|    |   +---users.js
+---app.js
+---package-lock.json
+---package.json
```



## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request


## Contact

My Email : sulfikardi25@gmail.com



---
Copyright © 2020 [Sulfikardi](https://github.com/shoelfikar/)
