import { cn, recoleta } from '@/lib/utils';

export const HeroCard = () => {
    return (
        <div className="text-black-200 bg-light-brown flex h-[400px] w-full items-end rounded-2xl p-8">
            <p className="text-[42px] leading-[56px] font-light">
                Let&apos;s create <br /> dance floor{' '}
                <span
                    className={cn(
                        'animate-pulse text-[56px] leading-[56px] font-black duration-75',
                        recoleta.className
                    )}
                >
                    magic
                </span>{' '}
                for your special day
            </p>
        </div>
    );
};
