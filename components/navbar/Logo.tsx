import Link from 'next/link';
import { AiOutlineHome } from "react-icons/ai";

import { Button } from '../ui/button';

function Logo() {
  return (
    // create a link that looks like a button using shadcn button.
    <Button size='icon' asChild>
      <Link href='/'>
        <AiOutlineHome className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo;