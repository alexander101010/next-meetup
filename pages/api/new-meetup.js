// route: /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://alex:QpYzzoIMmqOLfk70@cluster0.i3k3f.mongodb.net/meetup?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups'); // can be same as db name but doesn't have to be

    const result = await meetupsCollection.insertOne(data);
    // should use try catch block for error handling
    console.log(result);

    client.close();

    // set response code
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
