import images1 from '../assets/images1.png';
import images2 from '../assets/images2.png';
import images3 from '../assets/images3.png';
import images4 from '../assets/images4.png';
import images5 from '../assets/images5.png';
import images6 from '../assets/images6.png';
import images7 from '../assets/images7.png';
import images8 from '../assets/images8.png';
import background from '../assets/barne.png';
import '../styles/home.css';
const images = [
    { src: images1, alt: 'Image 1' },
  { src: images2, alt: 'Image 2' },
  { src: images3, alt: 'Image 3' },
  { src: images4, alt: 'Image 4' },
  { src: images5, alt: 'Image 5' },
  { src: images6, alt: 'Image 6' },
  { src: images7, alt: 'Image 7' },
  { src: images8, alt: 'Image 8' },
];
export default images;

export const Barner = ({text})=> {
  return (
    <div className='barner'
    style={{ backgroundImage: `url(${background})` }}>
       <div className='alt-c'>
           <div className='center-alt'>
               <h1> {text} </h1>
           </div>
       </div>
   </div>
  );
}