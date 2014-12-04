var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
  plugins.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('usemin', function() {
  gulp.src('./app/*.html')
    .pipe(plugins.usemin({
      css: [plugins.minifyCss(), 'concat', plugins.rev()],
      html: [plugins.minifyHtml({empty: true})],
      js: [plugins.uglify(), plugins.rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['connect', 'watch']);

// TODO: Add cleanup task
gulp.task('build', ['usemin']);
