import gulp from 'gulp'
import webp from 'gulp-webp'

gulp.task('images', () => {
  return gulp.src('public/images/normal/**.{jpg,jpeg,png}')
    .pipe(webp())
    .pipe(gulp.dest('public/images/webp'));
});

gulp.task('default', gulp.series('images'));