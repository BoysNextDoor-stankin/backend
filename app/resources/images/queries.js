module.exports = {
    create: `INSERT INTO images (image_link, owner_id, params)
             VALUES ($[params.image], $[params.ownerId], $[params.params])
             RETURNING image_id as "imageId"`,
    getAll: `SELECT image_id as "imageId"
                    ,image_link as "image"
                    ,owner_id as "ownerId"
                    ,params;`,
};
