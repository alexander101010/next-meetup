// dynamic show page, folder name can have bracketed identifier
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { Fragment } from 'react';

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      image='https://images.unsplash.com/photo-1595792463990-07008351a4fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      title='Black Tie Gala'
      description='Dress to impress. Bring out the penguin suits!'
      address='Antartica'
    />
  );
}

export default MeetupDetailsPage;
