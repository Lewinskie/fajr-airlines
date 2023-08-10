import Image from "next/image";

function Memberships({ memberships }) {
  return (
    <section style={{ marginBottom: "0px", paddingBottom: "0px" }}>
      <div className="my-2 flex flex-row items-center justify-start  gap-4 ">
        <div className=" h-1 w-10 rounded bg-red-500"></div>
        <h4 className="  uppercase text-2xl font-bold">
          Membership of Associations
        </h4>
      </div>
      <div className="flex justify-center py-4">
        {memberships.list &&
          memberships.list.map((member, i) => {
            return (
              <div
                key={member.id}
                className="p-20 flex flex-col items-center gap-4"
              >
                <Image
                  src={member.logo_url}
                  alt="Image"
                  width={100}
                  height={100}
                  className="h-20"
                />
                <div className="flex flex-col items-center  py-8">
                  <h4 className=" pt-2 text-center font-sans text-xl font-bold uppercase text-red-500">
                    {member.acronym}
                  </h4>
                  <p className="py-2 text-center text-base font-semibold capitalize text-gray-400">
                    {member.names}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Memberships;
