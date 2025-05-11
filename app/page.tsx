import { BottomHalfCard } from '@/components/home-section/bottom-half-card';
import CtaCard from '@/components/home-section/cta-card';
import { HeroCard } from '@/components/home-section/hero-card';
import { PortraitCard } from '@/components/home-section/portrait-card';
import RightCard from '@/components/home-section/right-card';
import { cn, recoleta } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';

const Home = () => {
    return (
        <div className="flex h-full w-full gap-8">
            <div className="flex h-full w-full flex-col gap-8">
                <div className="flex w-full gap-8">
                    <HeroCard />
                    <PortraitCard />
                </div>
                <div className="flex h-full w-full gap-8">
                    <BottomHalfCard className="bg-light-brown justify-end">
                        <p className="max-w-[85%] text-[14px]">
                            DJ Lisa is a passionate wedding DJ, acclaimed for blending
                            diverse musical genres with expert crowd-reading skills. Based
                            in Florida, she crafts personalized soundtracks that turn
                            every wedding into an unforgettable celebration.
                        </p>
                    </BottomHalfCard>
                    <BottomHalfCard className="bg-light-gray text-cream justify-between">
                        <div className="flex items-center justify-between">
                            <p>
                                have some <br /> question
                            </p>
                            <Icon
                                icon="ri:arrow-right-up-line"
                                className="text-cream size-8"
                            />
                        </div>

                        <h2 className={cn('text-[44px]', recoleta.className)}>
                            <span className="font-bold">Contact</span>{' '}
                            <span className="italic">me</span>
                        </h2>
                    </BottomHalfCard>
                </div>
            </div>
            <div className="flex w-full max-w-[450px] flex-col gap-8">
                <RightCard />
                <CtaCard />
            </div>
        </div>
    );
};

export default Home;
