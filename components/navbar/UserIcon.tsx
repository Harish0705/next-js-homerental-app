import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { fetchProfileImage } from "@/utils/actions";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <Image
        src={profileImage}
        alt="profile-image"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  return (
    <AiOutlineUser className="w-6 h-6 bg-primary rounded-full text-white" />
  );
};
export default UserIcon;
