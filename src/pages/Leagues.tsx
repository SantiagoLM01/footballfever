import { NavLink } from 'react-router-dom';
import { leagues } from '../globals/variables';
import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

const Teams = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {

    // Check if the images are already loaded
    const areImagesLoaded = leagues.every((league: any) => {
      const image = new Image();
      image.src = league.logo;
      return image.complete;
    });
    
    areImagesLoaded ? setImagesLoaded(areImagesLoaded) : setTimeout(() => {
      setImagesLoaded(true)
    }, 1000);
    

  }, []);

  return (
    <>
      <section className='max-h-full mt-10'>
        <h1 className='text-4xl text-center font-bold'>Leagues</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-8 mt-10'>
          {leagues.map((league: any, index: number) => (
            <NavLink to={`${league.id}`} key={index}>
              <div className='hover:scale-125 transform transition-all duration-700'>
                {!imagesLoaded ? (
                  <Skeleton animation="wave" variant="rectangular" width={240} height={160} />
                ) : (
                  <img
                    src={league.logo}
                    alt="League Logo"
                  />
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
};

export default Teams;
