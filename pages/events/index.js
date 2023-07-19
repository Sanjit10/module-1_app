import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event_list";
import EventSearch from "@/components/events/events_search";

const AllEventPage = () =>{

    const router = useRouter();
    const events = getAllEvents();
    const onSearch = (year, month)=>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <EventSearch onSearch={onSearch} />
            <EventList items={events}/>
        </div>
    )
}

export default AllEventPage;