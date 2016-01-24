'use strict';
var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var del = require('del');
var streamqueue = require('streamqueue');


var config = require('./config.json');

gulp.task('default', [
  'build',
  'js:watch',
  'css:watch',
  'images:watch',
  'index:watch',
], function () {
  gulp.start('webserver')
});

gulp.task('build', [
  'clean',
  'index:dev',
  'fonts',
  'js:dev',
  'css:dev',
  'images:dev',
]);

gulp.task('prod', [
  'clean',
  'index:prod',
  'fonts',
  'js:prod',
  'css:prod',
  'images:prod',
], function () {
  gulp.start('webserver')
});

gulp.task('clean', function (cb) {
  del.sync([config.bases.dist + '/**/*.*'], {force: true});
  return cb();
});

gulp.task('index:dev', function () {
  return gulp.src(config.path.index, {read: true})
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('index:prod', function () {
  return gulp.src(config.path.index, {read: true})
    .pipe(plug.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.bases.dist));
});

gulp.task('index:watch', function () {
  return gulp.watch(config.path.html, ['html']);
});

gulp.task('fonts', function () {
  return gulp.src(config.path.fonts, {read: true})
    .pipe(gulp.dest(config.bases.dist + '/fonts'));
});

gulp.task('js:dev', function () {
  var devStream = gulp.src(config.path.scripts)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.plumber())
    .pipe(plug.concat('app.js'))

  var vendorStream = gulp.src(config.path.libs)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.concat('app.vendor.js'))

  var templatesStream = gulp.src(config.path.html)
    .pipe(plug.angularTemplatecache('app.tpls.js', {
      module: 'app.tpls',
      standalone: true
    }))

  return streamqueue(
    {objectMode: true},
    vendorStream,
    devStream,
    templatesStream
  )
    .pipe(plug.concat('app.js'))
    .pipe(plug.sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.bases.dist + '/js'))
});

gulp.task('js:prod', function () {
  var devStream = gulp.src(config.path.scripts)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.plumber())
    .pipe(plug.concat('app.js'))

  var vendorStream = gulp.src(config.path.libs)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.concat('app.vendor.js'))

  var templatesStream = gulp.src(config.path.html)
    .pipe(plug.angularTemplatecache('app.tpls.js', {
      module: 'app.tpls',
      standalone: true
    }))

  return streamqueue(
    {objectMode: true},
    vendorStream,
    devStream,
    templatesStream
  )
    .pipe(plug.concat('app.js'))
    .pipe(plug.uglify())
    .pipe(gulp.dest(config.bases.dist + '/js'))
});

gulp.task('js:watch', function () {
  return gulp.watch(config.path.scripts
    .concat(config.path.libs)
    .concat(config.path.html), [
    'js:dev'
  ]);
});

gulp.task('css:dev', function () {
  var devStream = gulp.src(config.path.sass.src)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.plumber())
    .pipe(plug.sass(config.path.sass.conf))

  var vendorStream = gulp.src(config.path.cssLibs)
    .pipe(plug.sourcemaps.init())

  return streamqueue(
    {objectMode: true},
    vendorStream,
    devStream
  )
    .pipe(plug.concat('app.css'))
    .pipe(plug.sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.bases.dist + '/css'))
});

gulp.task('css:prod', function () {
  var devStream = gulp.src(config.path.sass.src)
    .pipe(plug.sourcemaps.init())
    .pipe(plug.plumber())
    .pipe(plug.sass(config.path.sass.conf))

  var vendorStream = gulp.src(config.path.cssLibs)
    .pipe(plug.sourcemaps.init())

  return streamqueue(
    {objectMode: true},
    vendorStream,
    devStream
  )
    .pipe(plug.concat('app.css'))
    .pipe(plug.minifyCss())
    .pipe(gulp.dest(config.bases.dist + '/css'))
});

gulp.task('css:watch', function () {
  return gulp.watch(config.path.sass.watch
    .concat(config.path.cssLibs), [
    'css:dev'
  ]);
});

gulp.task('images:dev', function () {
  return gulp.src(config.path.images)
    .pipe(gulp.dest(config.bases.dist + '/images'));
});

gulp.task('images:watch', function () {
  return gulp.watch(config.path.images, ['images:dev']);
});

gulp.task('images:prod', function () {
  return gulp.src(config.path.images)
    .pipe(plug.imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest(config.bases.dist + '/images'));
});

gulp.task('webserver', function () {
  return gulp.src('dist/')
    .pipe(plug.webserver({
      fallback: 'index.html',
      livereload: true,
      port: 9999
    }));
});