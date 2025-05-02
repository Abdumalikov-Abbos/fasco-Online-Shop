import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);

  if (!user.isLoggedIn) {
    return <div className="p-4 text-red-500">Please login to view profile</div>;
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}
