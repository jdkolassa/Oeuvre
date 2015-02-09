module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
      platforms: ['win', 'osx', 'linux'],
      buildDir: './dist',
      },
      src: ['./**/*']
    },
});

// Load and register generator and task
grunt.loadNpmTasks('grunt-node-webkit-builder');
grunt.registerTask('default', ['nodewebkit']);

};
