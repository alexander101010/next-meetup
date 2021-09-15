import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Black Tie Gala',
    image:
      'https://images.unsplash.com/photo-1595792463990-07008351a4fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    address: 'Antartica',
    description: `Dress to impress. Bring out the penguin suits!`,
  },
  {
    id: 'm2',
    title: 'Goring of the Humans',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Sanfermines_Vaquillas_Pamplona_03.jpg',
    address: 'Pamploma',
    description: `Usually I don't victim blame, but they asked for it.`,
  },
  {
    id: 'm3',
    title: 'Summering in Cali',
    image:
      'https://static01.nyt.com/images/2019/10/01/science/00TB-WHALESONGS1/00TB-WHALESONGS1-superJumbo.jpg',
    address: 'California',
    description: `Where my humpbacks at? Pod will be cruising by Santa Monica this weekend, join us! (And don't forget next weekend is the Catalina Wine Mixer!)`,
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
