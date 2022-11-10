const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    })
}


function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload)
}


function css() {
    return gulp.src('src/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            grid: 'autoplace',
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream())
}


function js() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(browserSync.stream())
}


function images() {
    return gulp.src('src/assets/img/**/*')
        .pipe(gulp.dest('build/assets/img'))
        .pipe(browserSync.stream())
}


function fonts() {
    return gulp.src('src/assets/fonts/*')
        .pipe(gulp.dest('build/assets/fonts'))
        .pipe(browserSync.stream())
}


function watcher() {
    gulp.watch('src/*.html', html)
    gulp.watch('src/assets/scss/**/*.scss', css)
    gulp.watch('src/assets/js/*.js', js)
    gulp.watch('src/assets/images/**/*', images)
    gulp.watch('src/assets/fonts/*', fonts)
}

gulp.task(
    'default',
    gulp.series(
        gulp.parallel(html, css, js, images, fonts),
        gulp.parallel(watcher, browsersync)
    )
);