export default function ApiRootUrl() {
  return (
    window.location.protocol +
    '//' +
    window.location.hostname +
    ':' +
    window.location.port +
    '/api'
  );
}
