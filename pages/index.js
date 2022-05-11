import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://static.euronews.com/articles/stories/05/17/56/42/1100x619_cmsv2_dd6cf20e-a9be-50fa-beeb-a71cbd2cb9e8-5175642.jpg",
    address: "Soma address 253",
    description: "This is our first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://static.euronews.com/articles/stories/05/17/56/42/1100x619_cmsv2_dd6cf20e-a9be-50fa-beeb-a71cbd2cb9e8-5175642.jpg",
    address: "Soma second address 253",
    description: "This is our second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// never executes on client side, you can access server side here
// export async function getStaticProps() {
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
