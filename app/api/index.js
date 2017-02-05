import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';
import authentication from 'feathers-authentication/client';

const socket = io('https://secure-anchorage-46467.herokuapp.com');

export default feathers()
.configure(hooks())
.configure(socketio(socket))
.configure(authentication({ storage: window.localStorage }));
