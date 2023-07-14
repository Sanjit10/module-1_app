import EventItem from "./event_item";
import classes from './event_list.module.css';

const event_list = (props) =>{
    const {items} = props;
    return (
        <ul className={classes.list}>
           {items.map((events)=>
            <EventItem
                key={events.id} 
                id={events.id}
                title={events.title}
                location={events.location}
                date={events.date}
                image={events.image}
                />)} 
        </ul>
    );
}

export default event_list;