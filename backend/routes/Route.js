const express = require('express');
const { priestRegistration, getPriest, updatePriest, priestLogin, deletePriest, getPriests, getFeedbacks, addFeedback, phoneExits } = require('../controller/Priest/Priest');
const verifyToken = require('../authentication/verifyToken');

const Router = express.Router();

Router.post('/priest/register',priestRegistration);
Router.post('/priest/login',priestLogin);
Router.post('/priest/update',verifyToken,updatePriest);
Router.post('/add/feedback',addFeedback);

Router.delete('/priest/delete',verifyToken,deletePriest)

Router.get('/phone/exit',phoneExits);
Router.get('/priest/get',verifyToken,getPriest);
Router.get('/priests/get',getPriests);
Router.get('/feedback/get',getFeedbacks);

module.exports= Router;