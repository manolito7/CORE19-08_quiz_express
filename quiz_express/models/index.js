const Sequelize = require('sequelize');

const options = {logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options);

sequelize.define(  // define Quiz model (table quizzes)
    'quiz',
    {
        question: {
            type: Sequelize.STRING,
            unique: {msg: "Ya existe esta pregunta"},
            validate: {notEmpty: {msg: "La pregunta no puede estar vacía"}}
        },
        answer: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "la respuesta no puede estar vacía"}}

        },
    });

sequelize.sync() // Syncronize DB and seed if needed
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if (count === 0) {
            return sequelize.models.quiz.bulkCreate([
                {question: "Capital of Italy", answer: "Rome"},
                {question: "Capital of France", answer: "Paris"},
                {question: "Capital of Spain", answer: "Madrid"},
                {question: "Capital of Portugal", answer: "Lisbon"}
            ]);
        }
    })
                .catch(error => {
                console.log(error);
        });

module.exports = sequelize;