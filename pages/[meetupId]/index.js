// dynamic show page, folder name can have bracketed identifier
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import { MONGO_STRING } from '../../js/config';

import MeetupDetails from '../../components/meetups/MeetupDetails';
import { Fragment } from 'react';

function MeetupDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGO_STRING);
  // console.log(client);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // pass empty object to filter arg to get all objects, then just get the id field by passing {_id:1} as second arg
  client.close();
  return {
    fallback: false, // means all paths are below, if true you can just pregenerate some and the rest will be done dynamically.
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // you can use CONTEXT arg to get PARAMS - the ID from the url
  const meetupId = context.params.meetupId;
  // fetch data for single meetup using meetupId from Params
  const client = await MongoClient.connect(MONGO_STRING);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailsPage;
