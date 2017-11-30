var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    imagemin = require('gulp-imagemin');

//Minifying CSS Task
gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

//Minifying Pizza.css Task
gulp.task('pizza-minify-css', () => {
  return gulp.src('./views/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/views'));
});

//Minifying Images Task
gulp.task('imagemin', function () {
    return gulp.src('./img/*')
        .pipe(imagemin([
              imagemin.gifsicle({interlaced: true}),
              imagemin.jpegtran({progressive: true}),
              imagemin.optipng({optimizationLevel: 3}),
              imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
         ]))
        .pipe(gulp.dest('./dist/img'));
});

//Minifying Pizza Images Task
gulp.task('pizza-imagemin', function () {
    return gulp.src('./views/images/*')
        .pipe(imagemin([
              imagemin.gifsicle({interlaced: true}),
              imagemin.jpegtran({progressive: true}),
              imagemin.optipng({optimizationLevel: 3}),
              imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
         ]))
        .pipe(gulp.dest('./dist/views/images'));
});

// Default Task
gulp.task('default', ['minify-css','pizza-minify-css','imagemin','pizza-imagemin']);