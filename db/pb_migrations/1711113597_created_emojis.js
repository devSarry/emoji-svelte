/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "reqspbm3cekueyu",
    "created": "2024-03-22 13:19:57.654Z",
    "updated": "2024-03-22 13:19:57.654Z",
    "name": "emojis",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgv64msk",
        "name": "emoji",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("reqspbm3cekueyu");

  return dao.deleteCollection(collection);
})
