
const cucumber = require('cypress-cucumber-preprocessor').default

const { defineConfig } = require("cypress");
module.exports = defineConfig({
includeShadowDom: true,
chromeWebSecurity: false,
screenshotsFolder: "cypress/screenshots",
videosFolder: "cypress/videos",
defaultCommandTimeout: 5000,
video: false,
	e2e: {
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())
			require("cypress-localstorage-commands/plugin")(on, config);
			return config
		// implement node event listeners here
    },
	baseUrl: "http://localhost:3000",
	specPattern: ["cypress/e2e/diaryView.feature","cypress/e2e/addDiary.feature","cypress/e2e/removeDiary.feature","cypress/e2e/newHeading.feature"],
	excludeSpecPattern: ["*.js","*.md"],
  }
});
