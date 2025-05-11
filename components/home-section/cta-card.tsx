import { Button } from '../button';

const CtaCard = () => {
    return (
        <div className="bg-light-brown flex h-[102px] shrink-0 justify-between rounded-2xl p-8">
            <Button className="pl-0">Instagram</Button>
            <Button>Twitter</Button>
            <Button className="pr-0">Pinterest</Button>
        </div>
    );
};

export default CtaCard;
