import Section from "../components/Section/Section";
import Orders from "../components/Orders/Orders";

const Profile = () => {
  const content = <Orders />;
  return (
    <Section maxWidth="max-w-[1250px]">
      <div className="w-full flex min-h-[80vh]">
        <div className="flex flex-col w-48">
          <div className="mb-4 text-2xl font-bold">My Profile</div>
          <div>
            <div className="py-2 cursor-pointer">My Orders</div>
            <div className="py-2 cursor-pointer">Adresses</div>
          </div>
        </div>
        <div className="flex-1">
          <ul>{content}</ul>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
