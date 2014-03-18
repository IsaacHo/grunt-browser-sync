/**
 * First run:
 *
 *      npm install grunt grunt-contrib-watch grunt-contrib-sass grunt-browser-sync
 *
 * This example will watch SCSS files & compile them.
 * BrowserSync will then inject the changes.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            sass: {
                files: "app/scss/*.scss",
                tasks: "sass:dev"
            }
        },
        sass: {
            dev: {
                files: {
                    "app/css/styles.css": "app/scss/styles.scss"
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Launch BrowserSync + watch task
    grunt.registerTask('default', ['browserSync', 'watch']);
};