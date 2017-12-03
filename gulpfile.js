var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    responsive = require('gulp-responsive-images'),
    print = require('gulp-print'),
    fontmin = require('gulp-fontmin'),
    cachebust = require('gulp-cache-bust'),
    clean = require('gulp-clean');

var imgResSizes = [{
                        width: 480,
                        suffix: '-xs-2x',
                        quality: 70
                    }, {
                        width: 768,
                        suffix: '-s-2x',
                        quality: 70
                    }, {
                        width: 1024,
                        suffix: '-m-2x',
                        quality: 70
                    }, {
                        width: 1280,
                        suffix: '-l-2x',
                        quality: 70
                    }];

//Delete files in img/srcset folder
gulp.task('clean-srcset', function () {
    gulp.src('./src/img/srcset', {read: false})
        .pipe(clean());
    gulp.src('./dist/img/srcset', {read: false})
        .pipe(clean());
});

//Delete files in pizza img/srcset folder
gulp.task('pizza-clean-srcset', function () {
    gulp.src('./src/views/images/srcset', {read: false})
        .pipe(clean());
    gulp.src('./dist/views/images/srcset', {read: false})
        .pipe(clean());
});

//Getting Responsive images
gulp.task('responsive-images', () =>
    gulp.src('./src/img/*.{jpg,png,gif}')
        .pipe(print())
        .pipe(responsive({ '**/*.*' : imgResSizes }))
        .pipe(gulp.dest('./src/img/srcset'))
);

//Getting Responsive images for pizza
gulp.task('pizza-responsive-images', () =>
    gulp.src('./src/views/images/*.{jpg,png,gif}')
        .pipe(print())
        .pipe(responsive( { '**/*.*' : imgResSizes }))
        .pipe(print())
        .pipe(gulp.dest('./src/views/images/srcset'))
);

//Minifying Images Task
gulp.task('imagemin', function () {
    return gulp.src('./src/img/**/*.*')
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
    gulp.src('./src/views/images/**/*.*')
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

//Minifying fonts
gulp.task('minify-fonts', function () {
    return gulp.src('./src/fonts/**/*.ttf')
        .pipe(fontmin())
        .pipe(gulp.dest('./dist/fonts'));
});

//Minifying CSS Task
gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

//Minifying Pizza.css Task
gulp.task('pizza-minify-css', () => {
  return gulp.src('./src/views/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/views/css'));
});

//Minifying HTML files
gulp.task('minify-html', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

//Minifying HTML Pizza.html
gulp.task('pizza-minify-html', function() {
  return gulp.src('./src/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/views'));
});

//Minifying JS
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});

//Minifying Pizza JS
gulp.task('pizza-minify-js', function (cb) {
  pump([
        gulp.src('./src/views/js/*.js'),
        uglify(),
        gulp.dest('./dist/views/js')
    ],
    cb
  );
});

//Cache Bust Task
gulp.task('cache-bust', () => {
    gulp.src('./dist/*/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./dist'));
});

//Optimize Images
gulp.task('optimize-images',['clean-srcset','responsive-images','imagemin','pizza-clean-srcset','pizza-responsive-images','pizza-imagemin']);

// Default Task
gulp.task('default', ['minify-fonts','minify-css','pizza-minify-css', 'minify-html', 'pizza-minify-html', 'minify-js', 'pizza-minify-js', 'cache-bust' ]);