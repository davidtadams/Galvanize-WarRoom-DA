var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'war-room-client/bower_components/foundation-sites/scss',
  'war-room-client/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('war-room-client/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('war-room-client/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['war-room-client/scss/**/*.scss'], ['sass']);
});
