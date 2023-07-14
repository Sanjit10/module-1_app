import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event_list";

const HomePage = () => {

    const featured_events = getFeaturedEvents();

    return (
        <div>
            <EventList items={featured_events} />
        </div>
    );
}

export default HomePage;