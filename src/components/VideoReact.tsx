import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

export default function VideReact({ title = 'MyTitle', titleSize } : {
    title?: string;
    titleSize: "lg" | "xl" | "2xl" | "4xl";
}) {    
    return <>
        <h2 className={cn(`text-white`, `text-${titleSize}`)}>
            {title}
        </h2>

        <video
            className="w-full mt-4"
            autoPlay
            muted
            loop
        
        >
            <source
                src="https://ia804502.us.archive.org/33/items/GoldenGa1939_3/GoldenGa1939_3_512kb.mp4"
                type="video/mp4"
            />
            
        </video> 
    </>
}

