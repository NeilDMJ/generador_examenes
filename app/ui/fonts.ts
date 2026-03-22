import localFont from 'next/font/local';

export const satoshi  =  localFont({
    src :[
        {
            path : '../../public/fonts/Satoshi-Regular.woff',
            weight : '400' ,
            style : 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Black.woff',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-satoshi',
    display: 'swap',
})