import community1 from "../assets/community1.svg";
import community2 from "../assets/community2.svg";
import community3 from "../assets/community3.svg";

const Community = () => {
  return (
    <div className="px-6 sm:px-24 py-6 sm:py-12 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-2xl text-[#4D4D4D] text-center">
          Manage your entire community <br /> in a single system
        </p>
        <p className="text-[#4D4D4D] text-sm">Who is Nextcent suitable for?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-16">
        <div className="flex items-center flex-col">
          <img src={community1} alt="" />
          <p className="font-bold text-xl text-center text-[#4D4D4D]">
            Membership Organisations
          </p>
          <p className="text-center text-sm text-[#4d4d4d]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={community2} alt="" />
          <p className="font-bold text-xl text-[#4D4D4D] text-center">
            National Associations
          </p>
          <p className="text-center text-sm text-[#4d4d4d]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={community3} alt="" />
          <p className="font-bold text-xl text-[#4D4D4D] text-center">Clubs And Groups</p>
          <p className="text-center text-sm text-[#4d4d4d]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
