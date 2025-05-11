import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const BottomHalfCard = ({ className, children, ...props }: Props) => {
    return (
        <div
            className={cn('flex h-full w-full flex-col rounded-2xl p-8', className)}
            {...props}
        >
            {children}
        </div>
    );
};
