import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfileImage = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
      const height = typewriterElement.clientHeight;
      setSize(height);
    }
  }, []);

  return (
    <div className="ml-4 mt-4 md:mt-0 flex justify-center md:justify-start items-center md:items-start">
      <Image
        src="/assets/resumeimagecropped.jpeg"
        alt="Resume Image"
        className="rounded-full"
        width={size}
        height={size}
      />
    </div>
  );
};

export default ProfileImage;
