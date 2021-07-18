"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import nunjucksRender from "gulp-nunjucks-render";
import htmlValidator from "gulp-w3c-html-validator";
import browsersync from "browser-sync";


gulp.task("nunjucks", () => {
    return gulp
        .src(paths.nunjucks.pages)
        .pipe(
            nunjucksRender({
                path: ["./src/components", "./src/nunjucks/templates"]
            })
        )
        .pipe(htmlValidator())
        .pipe(gulp.dest(paths.nunjucks.dist))
        .pipe(browsersync.stream());
});
