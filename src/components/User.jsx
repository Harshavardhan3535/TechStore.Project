const User = ({ userName = "Guest USER" }) => {
  return (
    <div>Hello {userName}</div>
  );
};

export default User;