const storage = require('./app/modules/db-connect.js');
const queries = {
    addComments: `DELETE FROM images WHERE 1=1`,
};
storage.none(queries.addComments)
    .then(() => {
        console.log('data removed');
    })
    .catch(error => {
        console.log(error);
    });
