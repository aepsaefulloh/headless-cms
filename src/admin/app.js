const config = {
  locales: ['en'],
  theme: {
    light: {
      colors: {
       
      },
    },
    dark: {
      // ...
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
