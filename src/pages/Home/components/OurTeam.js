import React from "react";
import member1 from "../../../assets/team-01.png";
import member2 from "../../../assets/team-02.png";
import member3 from "../../../assets/team-03.png";
function Member(props) {
  let { memberImage, name, work } = props;
  return (
    <div className="text-center ">
      <div>
        <img src={memberImage} className="w-9/12 block m-auto" alt="member photo" />
        <h3>{name}</h3>
        <h3>{work}</h3>
      </div>
      <div className="text-xl">
        <i class="p-3 opacity-50 fa-brands fa-facebook-f "></i>
        <i class="p-3 opacity-50 fa-brands fa-twitter"></i>
        <i class="p-3 opacity-50 fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div>
      <div className="p-12 text-center">
        <h2 className="text-2xl text-sky-600 px-20 font-semibold">
        Our Team
        </h2>
        <h1 className="text-5xl my-6 px-20 font-semibold">
        Meet Our Team        </h1>
        <p className="text-gray-600 text-xl px-60">
        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.        </p>
      </div>
      <div className="grid sm:grid-cols-4 px-36 py-4">
        <Member
          memberImage={member1}
          name={"Adveen Desuza"}
          work={"UI Designer"}
        />
        <Member
          memberImage={member2}
          name={"Jezmin uniya"}
          work={"Product Designer"}
        />
        <Member
          memberImage={member3}
          name={"Andrieo Gloree"}
          work={"App Developer"}
        />
        <Member
          memberImage={member1}
          name={"Jackie Sanders"}
          work={"Content Writer"}
        />
      </div>
    </div>
  );
}

export default OurTeam;
