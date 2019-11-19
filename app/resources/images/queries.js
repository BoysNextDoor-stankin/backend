module.exports = {
    create: `INSERT INTO images (image_link, owner_id, params)
             VALUES ($[params.image], $[params.ownerId], $[params.params])
             RETURNING image_id as "imageId"`,
    getAll: `SELECT image_id as "imageId"
                    ,image_link as "image"
                    ,owner_id as "ownerId"
                    ,params
             FROM images;`,
    getOne: `SELECT image_id as "imageId"
                    ,image_link as "image"
                    ,owner_id as "ownerId"
                    ,params
             FROM images       
             WHERE image_id = $[params.id];`,
    update: `UPDATE images
             SET params = $[params.params]
             WHERE image_id = $[params.id]
             RETURNING image_id as "imageId"
                       ,params;`,

};
