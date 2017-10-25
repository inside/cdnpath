import { appConfig } from 'roc-package-web-app-react/app/shared/universal-config';

// __webpack_public_path__ = '//asdfcdn.dev/';
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'development') {
  __webpack_public_path__ = appConfig.ASSETS_PUBLIC_PATH;
}
