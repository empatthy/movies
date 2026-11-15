import { Link } from 'react-router';
import chrisImg from '../../public/chris.jpg';

export const Header = () => {
  return (
    <div className="bg-[#14181d] h-[72px] w-full shadow-md">
      <div className="flex justify-between h-full mx-auto max-w-[950px] text-white">
        <div className="flex items-center space-x-6">
          <Link to='/'>
            <h1 className="text-3xl font-bold mr-20 text-[#F6F6F6]">KinoDawn</h1>
          </Link>
          <span className="font-bold text-[#EEF0F2]">Films</span>
          <span className="font-bold text-[#EEF0F2]">Lists</span>
          <span className="font-bold text-[#EEF0F2]">Journal</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-4">empathy</span>
          <img src={chrisImg} alt="Profile Picture" className="h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};
