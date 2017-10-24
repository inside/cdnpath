module.exports = {
  settings: {
    runtime: {
      applicationName: '',
      configWhitelistProperty: 'appConfig',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
      // fetch settings (these are the defaults)
      fetch: {
        server: ['fetch'], // hook used by server for fetching
        client: {
          beforeTransition: ['fetch'], // hook used by client for fetching that block route transitions
          afterTransition: ['defer', 'deferDone'], // hook used by client for fetching that does not block route transitions
          parallel: false, // if we should start non-blocking fetches in parallel with blocking ones
        },
      },
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes.js',
      input: {
        // web: ['public-path.js', 'app/default/client.js'],
        // node: ['public-path.js', 'app/default/server.js'],
        web: 'src/web-entry.js',
        node: 'src/node-entry.js',
      },
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};
