var gulp      = require('gulp');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');
var less      = require('gulp-less');
var uglify    = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var watch     = require('gulp-watch');

gulp.task('scripts', function() {
  return gulp.src(['./src/js/lib.js','./src/js/app.js'])
    .pipe(concat('main.js',{newLine: ';\n'}))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename('main.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default',['scripts','less']);