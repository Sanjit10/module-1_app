import Link from 'next/link';
import classes from './event_item.module.css';

const event_item = (props) =>{

    const {id, title , date , location , image}= props;

    const humanReadable = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/event/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div classNmae={classes.date}>
                        <time>{humanReadable}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className = {classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default event_item;