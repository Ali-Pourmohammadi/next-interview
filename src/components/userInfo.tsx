interface UserInfoProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  gitHubAddress?: string;
}

const UserInfo = ({ fullName, email, phoneNumber, gitHubAddress }: UserInfoProps) => {
  return (
    <div className="border border-solid border-gray-300 rounded-2xl bg-white text-black text-base leading-9 p-4 mx-4">
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{gitHubAddress}</p>
    </div>
  );
};

export default UserInfo;
