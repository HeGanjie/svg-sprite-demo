const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
// Basic configuration example
const config = {
  mode: {
    css: { // Activate the «css» mode
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};

function defaultTask(cb) {
  // place code for your default task here

gulp.src('**/*.svg', { cwd: './assets' })
  .pipe(svgSprite(config))
  .pipe(gulp.dest('out'));

  cb();
}

exports.default = defaultTask