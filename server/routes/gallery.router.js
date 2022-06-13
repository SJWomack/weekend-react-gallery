const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route handles likes
router.put('/like/:id', (req, res) => {
    console.log(req.params, req.body);
    const queryText = `
   UPDATE "user-images"
   SET "likes" = $2
   WHERE "id" = $1;   
   `
    pool.query(queryText, [req.params.id, (req.body.likes += 1)])
        .then(() => {
            console.log('likes updated');
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('like failed', err);
            res.sendStatus(500)
        })
}); // END PUT Route

// GET Route handles retrieving images
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "user-images" ORDER BY "id"`
    pool.query(queryText)
        .then((results) => {
            console.log('get success')
            res.send(results.rows);
        })
        .catch((err) => {
            console.log('get failed', err)
            res.sendStatus(500);
        })

}); // END GET Route

//handles delete request
router.delete('/:id', (req, res) => {

    const sqlQuery = `
        DELETE FROM "user-images"
        WHERE "id" = $1
    `

    pool.query(sqlQuery, [req.params.id])
        .then(() => {
            console.log('delete success')
            res.sendStatus(200)
        }).catch((err) => {
            console.log('delete request failed');
            res.sendStatus(500)
        })
})

//handles new gallery submission
router.post('/', (req, res)=>{
    if (req.body.url === '' || req.body.description === ''){
        res.send('please input all fields', 501);
        return false;
    }
    const queryText = `
        INSERT INTO "user-images" ("url", "description")
        VALUES ($1, $2)`
    pool.query(queryText, [req.body.url, req.body.description])
        .then(() =>{
            console.log('list post success');
            res.sendStatus(201);
        })
        .catch(err =>{
            console.log('err in post to list', err);
            res.sendStatus(500);
        })
})


module.exports = router;