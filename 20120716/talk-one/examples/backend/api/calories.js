/*!
 * Bremen.js
 *
 * calory counter
 *
 * Copyright(c) 2012 Bremen, Germany - All rights reserved.
 *
 * Authors:
 *
 *     Lukas Magedanz <lukas.magedanz@gmail.com>
 *     André König <andre.koenig@gmail.com>
 *
 */

var uuid = require('node-uuid');

module.exports = function (app, database) {

	// GET /calories
	//
	// Returns a list with all calory entries.
    app.get('/', function (req, res) {
        var entries = [];

        database.forEach(function (key, entry) {
            entries.push(entry);
        });

        res.json(entries);
    });

    // POST /calories
    //
    // Creates a new calory entry.
    app.post('/', function (req, res) {
        var calory = req.body;

        calory.id = uuid.v4();
        calory.date = new Date();

        database.set(calory.id, calory, function () {
            res.json(calory);
        });
    });

    // PUT /calories/:id
    //
    // Edit an existing calory entry.
    app.put('/:id', function (req, res) {
        var id
          , entry;

        id = req.params.id;
        entry = req.body;

        database.rm(id, function () {
            database.set(id, entry, function () {
                res.json(entry);
            });
        });
    });

    // DELETE /calories
    //
    // Delete an existing calory entry.
    app.del('/:id', function (req, res) {
        var id = req.params.id;

        database.rm(id, function () {
            res.send('ok');
        });
    });
};