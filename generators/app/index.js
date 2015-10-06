"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            "Welcome to the sublime " + chalk.red("Microservice Catalog") + " generator!"
        ));
    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath("_package.json"),
                this.destinationPath("package.json")
            );

            this.fs.copy(
                this.templatePath("_bower.json"),
                this.destinationPath("bower.json")
            );

            // Copy the express base config
            this.fs.copy(
                this.templatePath("app/_index.js"),
                this.destinationPath("app/index.js")
            );

            this.fs.copy(
                this.templatePath("app/catalog.html"),
                this.destinationPath("app/catalog.html")
            );
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath("editorconfig"),
                this.destinationPath(".editorconfig")
            );

            this.fs.copy(
                this.templatePath("jshintrc"),
                this.destinationPath(".jshintrc")
            );
        }
    },

    install: function () {
        this.installDependencies();
    },

    end: function() {
        this.config.save();
    }
});
