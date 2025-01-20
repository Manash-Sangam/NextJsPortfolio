import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfileImage = () => {
  return (
    <div className="ml-4 mt-4 md:mt-0 flex justify-center md:justify-start items-center md:items-start">
      <Image
        src="/assets/resumeimagecropped.jpeg"
        alt="Resume Image"
        className="rounded-full profile-image"
        width={300} // Set to the actual width of the image
        height={300} // Set to the actual height of the image
      />
    </div>
  );
};

export default ProfileImage;
