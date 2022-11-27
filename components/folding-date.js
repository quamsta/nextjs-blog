import { formatRelative, format } from 'date-fns';
import dynamic from 'next/dynamic'

export default function FoldingDate({ dateString }) {

    const formattedTimestamp = dateString.replace(' ', 'T').concat('Z')
    const date = new Date(formattedTimestamp);
    const now = new Date;

    return <time dateTime={dateString} suppressHydrationWarning>{formatRelative(date, now)} {format(date, 'z')}</time>;

}
