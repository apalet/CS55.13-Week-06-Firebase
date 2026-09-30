// To format the date, we’ll use the date-fns library.
// install it: npm install date-fns
import { parseISO, format } from 'date-fns';
 
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}