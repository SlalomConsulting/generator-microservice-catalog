"use strict";

var path = require("path");
var assert = require("yeoman-generator").assert;
var helpers = require("yeoman-generator").test;

describe("microservice-catalog:endpoint", function () {
    it("creates files", function () {
        helpers.run(path.join(__dirname, "../generators/endpoint"))
            .withArguments("testEndpoint")
            .withPrompts({
                operations: ["GET"]
            })
            .on("end", function() {
                assert.file([
                    "endpoints/testEndpoint.js"
                ]);
            })
    });
});
