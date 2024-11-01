import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    chromeWebSecurity:false,
    env:{
      mailsacApiKey:'k_90juOkZosikIsa699VcE4R8h34GFsJiQKsax7Q0e86'
    },
    
    setupNodeEvents(on, config) {
            
    },
  },
});
