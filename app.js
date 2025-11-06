const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const name = req.query.name || 'Recruto';
    const message = req.query.message || 'Давай дружить';

    const responseText = `Hello ${name}! ${message}!`;

    res.send(responseText);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${port}`);
    console.log(`Доступен по адресу: http://localhost:${port}`);
    console.log(`Пример запроса: http://localhost:${port}/?name=Recruto&message=Давай дружить`);
});