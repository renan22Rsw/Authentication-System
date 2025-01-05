interface UserInfoProps {
  user: string;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl">Welcome Back {user}</h1>
    </div>
  );
};

export default UserInfo;
