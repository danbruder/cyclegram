import hooks from 'feathers-hooks';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';
import authentication from 'feathers-authentication/client';

const socket = io('http://localhost:3030');

export default feathers()
.configure(hooks())
.configure(socketio(socket))
.configure(authentication({ storage: window.localStorage }));
