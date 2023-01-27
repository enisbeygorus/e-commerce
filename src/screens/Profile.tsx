import Section from "../components/Section/Section";
import Orders from "../components/Orders/Orders";
import ProfileLinks from "../components/ProfileLinks";

const Profile = () => {
  const content = <Orders />;
  return (
    <Section maxWidth="max-w-[1250px]">
      <div className="w-full flex min-h-[80vh]">
        <div className="flex flex-col w-48 font-bold">
          <div className="mb-4 text-2xl ">Profile</div>
          <ProfileLinks className="text-lg" />
        </div>
        <div className="flex-1">
          <div>{content}</div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
