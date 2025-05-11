import { PortraitImg } from '@/public/images';
import Image from 'next/image';

export const PortraitCard = () => {
    return (
        <div className="relative h-[400px] w-[300px] shrink-0 overflow-hidden rounded-2xl text-white">
            <Image src={PortraitImg} alt="Portrait" fill className="object-cover" />
        </div>
    );
};
