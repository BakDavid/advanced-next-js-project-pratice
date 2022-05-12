import MeetupDetail from "../../components/meetups/MeetupDetail";
import dbConnect from "../../lib/dbConnect";
import Meetup from "../../models/Meetup";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  // fetch ids to create dynamic paths
  await dbConnect();

  const result = await Meetup.find({}, { _id: 1 });
  const meetups = result.map((doc) => {
    const meetup = doc.toObject();
    meetup._id = meetup._id.toString();
    return meetup;
  });

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  await dbConnect();

  const result = await Meetup.findOne({ _id: meetupId });

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: result.image,
        title: result.title,
        address: result.address,
        description: result.description,
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
