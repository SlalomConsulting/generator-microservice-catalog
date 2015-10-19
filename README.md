# generator-microservice-catalog

> A [Yeoman](http://yeoman.io) generator for spinning up Express web-server projects, specifically scaffolding microservice endpoints that can then be hooked up to real back-end systems.

## Getting Started

You'll need NodeJS installed before you can install/run this project. Head over to XYZ and install NodeJS if you don't have it already.

With NodeJS installed, run the following to install Yeoman:

```bash
npm install -g yo
```

Next, run the following to install generator-microservice-catalog from npm:

```bash
npm install -g generator-microservice-catalog
```

## Runnning generator-microservice-catalog

Simple - initiate the generator:

```bash
yo microservice-catalog
```

To generate new endpoints:

```bash
yo microservice-catalog:endpoint <NAME>
```

Where <NAME> is the name of the endpoint. You'll be asked what methods to create (GET/POST/DELETE/etc)

### Running the project in your browser

From the directory in which you've run `yo`, run `node app` to fire up the microservice catalog you've created. Next, open up a web browser to `localhost:8080`

### Getting To Know Yeoman

If you'd like to get to know Yeoman better, check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
