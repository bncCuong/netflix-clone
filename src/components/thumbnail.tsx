import { thumbnailUrl } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Movie } from '../../types';

type Props = {
    movie: Movie;
};

const Thumbnail = ({ movie }: Props) => {
    // console.log(movie);

    return (
        <div className="min-w-[200px] h-32 relative">
            {
                <Image
                    src={`${thumbnailUrl}${movie.backdrop_path}`}
                    alt="thumbnail"
                    fill
                    priority
                    className="w-[200px] h-[100%] absolute cursor-pointer rounded-sm "
                />
            }
        </div>
    );
};

export default Thumbnail;
