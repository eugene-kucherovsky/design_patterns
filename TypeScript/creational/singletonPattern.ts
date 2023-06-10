// Design Patterns
// Singleton

// - an object type that can only be instantiated ONCE
// ( pattern is useless in JavaScript due to literal object syntax )

// application
// 1. database driver
// 2. configurations settings list

class Settings {
  static instance: Settings;

  private constructor() {}

  static getInstance(): Settings {
    // if the instance does not exist, return ONE
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}

// create instance
const settings = Settings.getInstance();
