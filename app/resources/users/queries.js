module.exports = {
    create: `INSERT INTO users (name, surname, lastname, login, password)
             VALUES ($[params.name], NULL, NULL, $[params.login], md5($[params.password]))
             RETURNING user_id as "userId"
                       ,name
                       ,login;`,
    getOne: ``
};
