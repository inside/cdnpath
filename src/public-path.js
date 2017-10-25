import { appConfig } from 'roc-package-web-app-react/app/shared/universal-config';

if (process.env.NODE_ENV !== 'development') {
  __webpack_public_path__ = appConfig.ASSETS_PUBLIC_PATH;
}
