import Image, { StaticImageData } from "next/image";

interface UserImageProps {
  img: string | StaticImageData;
}

const UserImage = ({ img }: UserImageProps) => {
  return (
    <div>
      <Image src={img} alt="user image" width={200} height={200} />
    </div>
  );
};

export default UserImage;
