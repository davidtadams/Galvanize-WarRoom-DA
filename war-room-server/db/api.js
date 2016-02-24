module.exports = {
  servers: {
    getAverages: function(db) {
      return db.collection('servers').aggregate([
        { $group: {
          _id: "$id",
          avgResponse: {$avg: "$responseTime"}
        }}
      ]).toArray()
    },
    insertServers: function(db, data) {
      return db.collection('servers').insert(data)
    }
  }
}
