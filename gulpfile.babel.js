"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        nunjucks: {
            pages: ["./src/nunjucks/pages/*.html"],
            components: ["./src/components"],
            templates: ["./src/nunjucks/templates"],
            dist: "./build/",
            watch: ["./src/components/**/*.html", "./src/nunjucks/**/*.html"],
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./build/styles/",
            watch: [
                "./src/components/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}",
            ],
        },
        scripts: {
            src: "./src/js/main.js",
            dist: "./build/js/",
            watch: ["./src/components/**/*.js", "./src/js/**/*.js"],
        },
        images: {
            src: [
                "./src/resources/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/resources/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            ],
            dist: "./build/img/",
            watch: "./src/resources/img/**/*.{jpg,jpeg,png,gif,svg}",
        },
        sprites: {
            src: "./src/resources/img/sprite/*.svg",
            dist: "./build/img/sprite/",
            watch: "./src/resources/img/svg/*.svg",
        },
        fonts: {
            src: "./src/resources/fonts/**/*.{woff,woff2}",
            dist: "./build/fonts/",
            watch: "./src/resources/fonts/**/*.{woff,woff2}",
        },
        favicons: {
            src: "./src/resources/img/favicon/*.{jpg,jpeg,png,gif,tiff,svg}",
            dist: "./build/img/favicon/",
        },
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
    "clean",
    gulp.parallel([
        "nunjucks",
        "styles",
        "scripts",
        "images",
        "webp",
        "sprites",
        "fonts",
        "favicons",
    ]),
    gulp.parallel("serve"),
);

export const prod = gulp.series(
    "clean",
    gulp.parallel([
        "nunjucks",
        "styles",
        "scripts",
        "images",
        "webp",
        "sprites",
        "fonts",
        "favicons",
    ]),
);

export default development;
