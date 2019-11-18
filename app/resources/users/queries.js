module.exports = {
    create: `INSERT INTO users (name, surname, lastname, login, password)
             VALUES ($[params.name], NULL, NULL, $[params.login], md5($[params.password]))
             RETURNING user_id as "userId"
                       ,name
                       ,login;`,
    checkUser: `SELECT name
                        ,user_id as "userId"
             FROM users
             WHERE login = $[params.login] AND password = md5($[params.password]);`
};
