// domain/new-meetup
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    // send request - use local path since its an interior api served on same server
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add BirbListing</title>
        <meta
          name='description'
          content='add a new BirbListing and grow your flock!'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
