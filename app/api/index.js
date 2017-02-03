import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';
import authentication from 'feathers-authentication/client';

const socket = io('https://perpetual-phone.gomix.me');

export default feathers()
.configure(hooks())
.configure(socketio(socket))
.configure(authentication({ storage: window.localStorage }));
