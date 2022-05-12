import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://static.euronews.com/articles/stories/05/17/56/42/1100x619_cmsv2_dd6cf20e-a9be-50fa-beeb-a71cbd2cb9e8-5175642.jpg"
      title="First title"
      address="First address"
      description="First Description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://static.euronews.com/articles/stories/05/17/56/42/1100x619_cmsv2_dd6cf20e-a9be-50fa-beeb-a71cbd2cb9e8-5175642.jpg",
        title: "First title",
        address: "First address",
        description: "First Description",
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
