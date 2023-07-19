import classes from './event_item.module.css';
import Button from '../UI/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';


const event_item = (props) =>{

    const {id, title , date , location , image}= props;

    const humanReadable = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />    
                        <time>{humanReadable}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className = {classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default event_item;