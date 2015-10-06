"use strict";

var path = require("path");
var utilities = require("../../utilities.js");
var yeoman = require("yeoman-generator");

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument("name", {
            required: true,
            type: String,
            desc: "The endpoint name"
        });

        this.log("You called the Microservice Catalog subgenerator with the argument: " + this.name + ".");
    },

    prompting: function () {
        var done = this.async();

        this.prompt({
            type    : "checkbox",
            name    : "operations",
            message : "Which operations do you require on this endpoint?",
            choices: [
                {
                  value: "GET",
                  name: "GET",
                  checked: true
                }, {
                  value: "PUT",
                  name: "PUT",
                  checked: false
                }, {
                  value: "POST",
                  name: "POST",
                  checked: false
                }, {
                  value: "DELETE",
                  name: "DELETE",
                  checked: false
                }
            ]
        }, function (answers) {
            this.operations = {};
            var operations = answers.operations;

            function hasOperation (operation) {
                return operations.indexOf(operation) !== -1;
            };

            this.operations.GET = hasOperation("GET");
            this.operations.PUT = hasOperation("PUT");
            this.operations.POST = hasOperation("POST");
            this.operations.DELETE = hasOperation("DELETE");

            done();
        }.bind(this));
    },

    writing: function () {

        // Tokenise based on the GET, POST, PUT, DELETE paremeters
        this.fs.copyTpl(
            this.templatePath("endpoint.js"),
            this.destinationPath("app/endpoints/" + this.name + ".js"),
            {
                name: this.name,
                operations: this.operations
            }
        );

        // TODO: Create and Tokenise a test based on the GET, POST, PUT, DELETE paremeters

        // Tokenise the main index.js file based on the GET, POST, PUT, DELETE paremeters
        var jsOperationsToSplice = [];

        for (var operation in this.operations) {
            if (this.operations[operation]) {
                jsOperationsToSplice.push(
                    "app." + operation.toLowerCase() + "(\"/" + this.name + "\", function (req, res) {\n" +
                    "\t" + this.name + "." + operation.toLowerCase() + "(req, res);\n" +
                    "});\n"
                );
            }
        };

        utilities.rewriteFile({
            file: "app/index.js",
            needle: "\/\/MODULE_HOOK",
            splicable: ["var " + this.name + " = require(\"./endpoints/" + this.name + "\");"]
        });

        utilities.rewriteFile({
            file: "app/index.js",
            needle: "\/\/ENDPOINTS_HOOK",
            splicable: jsOperationsToSplice
        });

        // Service Catalog
        var htmlOperationsToSplice = [];

        for (var operation in this.operations) {
            if (this.operations[operation]) {
                htmlOperationsToSplice.push(
                    "<div>\n" +
                        "\t<h2>" + operation + "/" + this.name + "</h2>\n" +
                        "\t<div>\n" +
                            "\t\tChange this text about operation " + operation + " on /" + this.name + "\n" +
                        "\t</div>\n" +
                    "</div>"
                );
            }
        };

        utilities.rewriteFile({
            file: "app/catalog.html",
            needle: "<!--ENDPOINTS_HOOK-->",
            splicable: htmlOperationsToSplice
        });
    }
});
