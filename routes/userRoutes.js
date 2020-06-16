const userController = require('../src/api/controllers/userController');

const userRoutes = (app) => {
    app.post('/api/v1/user', userController.create);
    app.get('/api/v1/user', userController.index);
}

module.exports = userRoutes
