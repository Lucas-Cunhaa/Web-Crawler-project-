const { MongoClient } = require('mongodb');

class MongoDb {
  constructor  () {
    this.uri = "mongodb+srv://lucasgalvao260:Gx45yxy4lT0YAIsN@webcrawller.vziz9nj.mongodb.net/?retryWrites=true&w=majority&appName=WebCrawller";
    this.client = new MongoClient(this.uri);
    this.db = null;
    this.collection = null;
    this.connect()
  }

  async connect () {
    try {
      await this.client.connect();
      this.db = this.client.db('WebCrawller');
      this.collection = this.db.collection('WeatherInfos');
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async insertWeatherInfo (document) {
    try {
      await this.collection.insertOne(document);
      console.log("Inserted weather info successfully:", document);
    } catch (error) {
      console.error("Error inserting weather info:", error);
    }
  }

  async getByCity (city) {
    try {
      const request = await this.collection.find( { City : city } ).toArray();
      console.log(request)
      return request 
    } catch (error) {
      console.error("Error getting weather info by city:", error);
    }
  }
  async deleteAll () {
    try {
      const request = await this.collection.deleteMany({});
      console.log(request)
      console.log('DELEETED')
      return request 
    } catch (error) {
      console.error("Error getting weather info by city:", error);
    }
  }
}

module.exports = new MongoDb();