const VERSION = 'v1';

const getName = (key: string) => {
  return `@@${VERSION}/${key}`;
};

export class AppStorage {
  static ITEMS = {
    EVENTS: 'events',
  };

  static save(key: string, values: Object) {
    localStorage.setItem(getName(key), JSON.stringify(values));
  }

  static get<T>(key: string, defaultValue: T) {
    const item = localStorage.getItem(getName(key));

    if (item) {
      return JSON.parse(item) as T;
    }

    return defaultValue;
  }
}
