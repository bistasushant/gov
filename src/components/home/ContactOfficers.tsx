import React from "react";
import Image from "next/image";
import { ContactOfficerItem } from "@/lib/types";

const ContactOfficer: React.FC<ContactOfficerItem> = ({
  image,
  title,
  name,
  regNo,
  phone,
  officePhone,
  email,
  position,
}) => {
  return (
    <div className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-lg w-full">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <div className="mb-4">
            <h6 className="font-medium">{name}</h6>
            <p className="text-sm text-slate-400">{regNo}</p>
            <p className="text-sm text-slate-400">{phone}</p>
            <p className="text-sm text-slate-400">{officePhone}</p>
            <p className="text-sm text-indigo-600">{email}</p>
            <p className="text-sm text-slate-400">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactOfficers: React.FC = () => {
  const officers: ContactOfficerItem[] = [
    {
      image: "/images/client/03.jpg",
      title: "Information Officer",
      name: "Er. Deependra Kumar Bariyait",
      regNo: "NEC Reg. No. 386 Mechanical",
      phone: "9763690647",
      officePhone: "01-4520655/01-4520655 Ext. 146",
      email: "information@nec.gov.np",
      position: "(Engineer)",
    },
    {
      image: "/images/client/04.jpg",
      title: "Grievance Hearing Officer",
      name: "Er. Kabita Gautam",
      regNo: "NEC Reg. No. 81883 Information Technology",
      phone: "9767472423",
      officePhone: "01-4520655/01-4520655 Ext. 103",
      email: "grievance@nec.gov.np",
      position: "(IT Engineer)",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 bg-gray-50 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-8 text-center">
          <h3 className="mb-4 text-2xl sm:text-3xl font-semibold">
            Contact Officers
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 justify-items-center">
          {officers.map((officer, index) => (
            <ContactOfficer
              key={index}
              image={officer.image}
              title={officer.title}
              name={officer.name}
              regNo={officer.regNo}
              phone={officer.phone}
              officePhone={officer.officePhone}
              email={officer.email}
              position={officer.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOfficers;