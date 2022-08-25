const app = require('./app');
require('./database')

let PORT = app.get('port');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});