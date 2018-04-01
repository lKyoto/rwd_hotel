//Imports plugins
const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// funcintion SASS
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
