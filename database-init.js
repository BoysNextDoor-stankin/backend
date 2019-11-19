const storage = require('./app/modules/db-connect.js');
const queries = {
    createTableImages: `create table images
                        (
                          image_id   serial                      not null
                            constraint images_pkey
                            primary key,
                          image_link varchar                     not null,
                          owner_id   integer                     not null,
                          params     jsonb default '{}' :: jsonb not null
                        );`,
};
storage.none(queries.createTableImages)
    .then(() => {
        console.log('table created');
    })
    .catch(error => {
        console.log(error);
    });
