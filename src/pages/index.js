import Image from 'next/image';
import image01 from '../images/01.jpg';
import image02 from '../images/02.jpg';
import image03 from '../images/03.jpg';
import image04 from '../images/04.jpg';
import image05 from '../images/05.jpg';
import image06 from '../images/06.jpg';

export default function Home() {
  return (
    <div>
      <Image src={image01} width="200" height="200" />
      <Image src={image02} width="200" height="200" />
      <Image src={image03} width="200" height="200" />
      <Image src={image04} width="200" height="200" />
      <Image src={image05} width="200" height="200" />
      <Image src={image06} width="200" height="200" />
    </div>
  );
}
