// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
const DUMMY_MEETUPS=[
  {
    id:'M1',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    title:'A First Meetup',
    address:'Some Address 10, 12345 some city',
    description:'This is a first meetup'
  },
  {
    id:'M2',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    title:'A Second Meetup',
    address:'Some Address 20, 5678 some city',
    description:'This is a second meetup'
  }
]

function HomePage(props){
  // const[loadedMeetups,setLoadedMeetups] = useState([]);
  // useEffect(()=>{
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // },[])

  return(
    <MeetupList meetups={props.meetups}/>
  )
}
//Server Side Generation

export async function getServerSideProps(context){

  const req = context.req;
  const res = context.res;
  console.log(`${req} ${res}`);
  return{
    props:{
      meetups:DUMMY_MEETUPS
    }
  }
}


// static Generation:
// export async function getStaticProps(){
//     //API calling
//     return{
//       props:{
//         meetups:DUMMY_MEETUPS
//       },
//       revalidate:5
//     }
// }

export default HomePage;