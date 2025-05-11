import { cn, recoleta } from '@/lib/utils';
import { Button } from './button';

export const Navbar = () => {
    return (
        <div className="bg-light-brown text-black-200 flex h-[102px] items-center justify-between rounded-2xl p-8">
            <Button className="px-0">
                <h1 className="font text-3xl font-medium select-none">
                    DJ <span className={cn(recoleta.className)}>Lisa</span>
                </h1>
            </Button>
            <div className="flex items-center">
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Contact</Button>
            </div>
        </div>
    );
};
