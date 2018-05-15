import hotClient from 'webpack-hot-middleware/client';
import launchEditorEndpoint from 'react-dev-utils/launchEditorEndpoint';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import {
  setEditorHandler,
  reportBuildError,
  dismissBuildError,
  startReportingRuntimeErrors,
  stopReportingRuntimeErrors
} from 'react-error-overlay';

setEditorHandler(errorLocation =>
  fetch(
    launchEditorEndpoint +
      '?fileName=' +
      window.encodeURIComponent(errorLocation.fileName) +
      '&lineNumber=' +
      window.encodeURIComponent(errorLocation.lineNumber || 1) +
      '&colNumber=' +
      window.encodeURIComponent(errorLocation.colNumber || 1)
  )
);

hotClient.useCustomOverlay({
  showProblems(type, errors) {
    const formatted = formatWebpackMessages({
      errors,
      warnings: []
    });

    reportBuildError(formatted.errors[0]);
  },
  clear() {
    dismissBuildError();
  }
});

hotClient.setOptionsAndConnect({
  name: 'client',
  reload: true
});

startReportingRuntimeErrors({
  filename: '/app.js'
});

if (module.hot) {
  module.hot.dispose(stopReportingRuntimeErrors);
}
