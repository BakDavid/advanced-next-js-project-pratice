import dbConnect from "../../lib/dbConnect";
import Meetup from "../../models/Meetup";

// /api/new-meetup

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const meetups = await Meetup.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: meetups })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const meetup = await Meetup.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: meetup })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
  // if (req.method === "POST") {
  //   const data = req.body;

  //   const client = MongoClient.connect(
  //     "mongodb+srv://pedro:UVEbNoBZDlJJsmNL@cluster0.mryvn.mongodb.net/meetups?retryWrites=true&w=majority"
  //   );

  //   const db =  client.db();
    
  //   const result = await db.collection("meetups").insertOne(data);

  //   console.log(result);

  //   (await client).close;

  //   res.status(201).json({ message: "Meetup inserted!" });

  //   // add error handling later
  // }
  // // res.status(200).json({ name: "John Doe" });
}
