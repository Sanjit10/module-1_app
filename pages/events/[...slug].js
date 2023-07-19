import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';
import EventList from '@/components/events/event_list';

const FilteredEventsPage = () => {  

    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){
        return <p className="center">Loading...</p>
    }

    const year = filterData[0];
    const month = filterData[1];

    const numYear = +year;
    const numMonth = +month;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return <p>Invalid filter. Please adjust your values!</p>
    }

    const filterEvents= getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if(!filterEvents || filterEvents.length === 0){
        return <p>No events found for the chosen filter!</p>
    }
    
    return (
        <div>
            <EventList items={filterEvents}/>
        </div>
    );
    }

export default FilteredEventsPage;