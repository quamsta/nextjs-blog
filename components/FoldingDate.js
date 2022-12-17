import { formatRelative, format } from 'date-fns';
import dynamic from 'next/dynamic'

export default function FoldingDate({ dateString }) {
    // Hacky way to force a UTC timezone on the date we get from Folding@Home's API, which
    // doesn't contain UTC timezone information baked in, but it is definitely UTC.
    const formattedTimestamp = dateString.replace(' ', 'T').concat('Z')
    const date = new Date(formattedTimestamp);
    const now = new Date;

    return <time dateTime={dateString} suppressHydrationWarning>{formatRelative(date, now)} {format(date, 'z')}</time>;

}
