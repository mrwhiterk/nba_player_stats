const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'http://afternoon-mesa-92635.herokuapp.com';

export default serverUrl;
