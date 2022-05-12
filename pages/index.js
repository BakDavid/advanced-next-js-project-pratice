import MeetupList from "../components/meetups/MeetupList";
import dbConnect from "../lib/dbConnect";
import Meetup from "../models/Meetup";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// never executes on client side, you can access server side here
export async function getStaticProps() {
  // fetch data from API
  await dbConnect();

  const result = await Meetup.find({});
  const meetups = result.map((doc) => {
    const meetup = doc.toObject();
    meetup._id = meetup._id.toString();
    return meetup;
  });

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
