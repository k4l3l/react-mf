import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'calculator',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
