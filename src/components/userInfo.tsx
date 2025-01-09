interface UserInfoProps {
  user: string;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return <h1 className="text-center text-3xl">Hello, {user}</h1>;
};

export default UserInfo;
