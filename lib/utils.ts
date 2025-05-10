import { clsx, type ClassValue } from 'clsx';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const nura = localFont({
    src: [
        {
            path: '../public/fonts/nura/Nura-Thin.woff',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-ExtraLight.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-Normal.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-ExtraBold.woff',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/nura/Nura-Black.woff',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-nura',
});

export const recoleta = localFont({
    src: '../public/fonts/recoleta/recoleta-regulardemo.otf',
    variable: '--font-recoleta',
});
