interface UserInfoProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  gitHubAddress?: string;
}

const UserInfo = ({ fullName, email, phoneNumber, gitHubAddress }: UserInfoProps) => {
  return (
    <div className="border border-solid border-gray-300 rounded-2xl bg-white text-black text-base leading-9 p-4 mx-4">
      <p>{'Ali pourmohammadi'}</p>
      <p>{`alipourmohammadi1383dev@gmail.com`}</p>
      <p>{`09138130465`}</p>
      <p>{`https://github.com/Ali-Pourmohammadi`}</p>
    </div>
  );
};

export default UserInfo;
