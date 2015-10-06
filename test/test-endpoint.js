"use strict";

var path = require("path");
var assert = require("yeoman-generator").assert;
var helpers = require("yeoman-generator").test;

describe("MicroserviceCatalog:generators/endpoint", function () {
    before(function (done) {
        helpers.run(path.join(__dirname, "../generators/endpoint"))
            .withArguments("testEndpoint")
            .withOptions({
                skipInstall: true,
                force: true
            })
            .on("end", done);
    });

    it("creates files", function () {
        assert.file([
            "endpoints/testEndpoint.js"
        ]);
    });

    it("updates the express config and the service catalog", function () {
        assert.fileContent("app/index.js", /var testEndpoint = require("\./endpoints/testEndpoint")/);
        assert.fileContent("app/index.js", /testEndpoint\.get(req, res);/);
        assert.fileContent("app/catalog.html", /GET on \/testEndpoint/);
    });
});
