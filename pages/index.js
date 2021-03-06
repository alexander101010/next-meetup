import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';

import { MONGO_STRING } from '../js/config';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  // this useEffect approach only runs once as page is rendered, wouldn't catch updates to db, use getStaticProps export instead
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send http request to fetch meetups data - mimick with dummy data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>BirbsList</title>
        <meta
          name='description'
          content='Check out what your local flocks are up to on BirbsList!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) { // better for data that changes many times per second
//   // runs on the server after deployment, not during the build process
//   // can use credentials that shouldn't be exposed to users
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // not exposed to the client
  // fetch data
  const client = await MongoClient.connect(MONGO_STRING);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
