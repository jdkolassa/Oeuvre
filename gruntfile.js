module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
          platforms: ['win','osx', 'linux'],
          buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
      },
      src: ['./example/public/**/*'] // Your node-webkit app
    },
  });

  // Load node-webkit generator plugin

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Register nodewebkit task
  grunt.registerTask('default', ['nodewebkit']);
};
