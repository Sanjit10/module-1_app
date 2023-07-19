import { useRouter } from 'next/router';   
import { getEventById } from '@/dummy-data'; 

const EventInfo = () => {
    const router = useRouter();
    const eventId = router.query.event_id;
    const event = getEventById(eventId);

    if(!event){
        return <p>No Event Found</p>
    }
    
    return (
        <div>
        <h1>Event Info Page : </h1>
        <h2>{eventId}</h2>
        <a href="/">Home</a><br />
        <a href="/events">Events</a>    
        </div>
    );
}

export default EventInfo;