# node-api-client

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80"><br />
    Node.js API Client
</p>

`node-api-client` is a lightweight and flexible HTTP client for interacting with RESTful APIs in Node.js. It supports common HTTP methods such as GET, POST, PUT, PATCH, and DELETE, with customizable options for headers, query parameters, and timeouts.

## install

```sh
npm install node-api-client
```

## Usage

Here's an example of how to use node-api-client:

```js
import { APIClient, APIClientOptions } from 'node-api-client';

const options: APIClientOptions = {
  restEndpoint: 'http://localhost:8001/api'
};

const client = new APIClient(options);

// GET request
client.get('/endpoint')
  .then(response => console.log(response))
  .catch(error => console.error(error));

// POST request with JSON body
client.post('/endpoint', { key: 'value' })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```