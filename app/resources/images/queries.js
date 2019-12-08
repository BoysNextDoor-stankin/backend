module.exports = {
    create: `INSERT INTO images (image_link, owner_id, params, comment)
             VALUES ($[params.image], $[params.ownerId], $[params.params], $[params.comment])
             RETURNING image_id as "imageId"`,
    getAll: `SELECT image_id as "imageId"
                    ,image_link as "image"
                    ,owner_id as "ownerId"
                    ,params
                    ,comment
             FROM images;`,
    getOne: `SELECT image_id as "imageId"
                    ,image_link as "image"
                    ,owner_id as "ownerId"
                    ,params
                    ,comment
             FROM images       
             WHERE image_id = $[params.id];`,
    update: `UPDATE images
             SET params = $[params.params]
                 ,comment = $[params.comment]
             WHERE image_id = $[params.id]
             RETURNING image_id as "imageId"
                       ,params
                       ,comment;`,

};
