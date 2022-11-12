import { formatRelative } from 'date-fns';


export default function FoldingDate({ dateString }) {

    const formattedTimestamp = dateString.replace(' ', 'T').concat('Z')
    const date = new Date(formattedTimestamp);
    const now = new Date;

    return <time dateTime={dateString}>{formatRelative(date, now)}</time>;

}
