const {io} = require('../index');

// Mensajes de socket
io.on('connection', client => {
    console.log('Cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
    client.on('mensaje', ( payload ) =>{
        console.log('Mensaje !!!',payload);
        
        io.emit('mensaje', { admin : 'Nuevo Mensaje'});
    });
});