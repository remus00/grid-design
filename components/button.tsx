import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: Props) => {
    return (
        <button
            {...props}
            className={cn(
                'cursor-pointer px-4 text-[16px] font-normal transition-all duration-300 hover:text-white',
                props.className
            )}
        >
            {children}
        </button>
    );
};
