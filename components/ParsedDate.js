import { format, parseISO } from 'date-fns';


export default function ParsedDate({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;


}
