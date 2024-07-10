const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920, 
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // Implemente event listeners aqui
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true, // relatorios podem ser feitos em outros formatos
      json: false,
      timestamp: "mmddyyyy_HHMMss" 
    }
  },
});