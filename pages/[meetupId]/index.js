import MeetupDetail from '../../components/meetups/MeetupDetail';
function MeetupDetails(props){
return(
    <>
    <MeetupDetail image={props.meetupData.image}
    // "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
                   title={props.meetupData.title}
                //    "A First Meetup"
                   address={props.meetupData.address}
                //    "Some Street5,Some City"
                   description={props.meetupData.description}
                //    "The Meetup Description"
    />
    </>
)
}

export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            {
                params:{meetupId:'M1'}
           },
           {
               params:{meetupId:'M2'}
           }
        ]
    }
}


export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return{
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id:meetupId,
                title:'A First Meetup',
                address:'Some Street5,Some City',
                description:'The Meetup Description'
            }
        }
    }
}




export default MeetupDetails;