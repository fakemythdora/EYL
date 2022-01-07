const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot của bạn đã đã online!!!'))

app.listen(port, () =>
console.log(`Đang dùng web http://localhost:${port} để host! Good Luck :D`) //Just a cap from my brother ;-; Please dont delete -> ${port}
);
