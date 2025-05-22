import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageItem } from "@/lib/types";

const MessageCard: React.FC<MessageItem> = ({
  image,
  title,
  message,
  name,
  regNo,
  position,
  link,
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
          <p className="text-slate-400 mb-4">{message}</p>
          <div className="mb-4">
            <h6 className="font-medium">{name}</h6>
            <p className="text-sm text-slate-400">{regNo}</p>
            <p className="text-sm text-indigo-600">{position}</p>
          </div>
          <Link
            href={link}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Read Full Message <i className="uil uil-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Messages: React.FC = () => {
  const messages: MessageItem[] = [
    {
      image: "/images/client/01.jpg",
      title: "Message From Chairman",
      message:
        "It's my great pleasure to convey Greetings to all engineers and stakeholders in the engineering profession. On behalf of the Nepal Engineering Council (NEC), I want to express our appreciation for your dedication and contributions...",
      name: "Prof.Dr. Padma Bahadur Shahi",
      regNo: "NEC Reg. No. 161 Civil",
      position: "(Chairman)",
      link: "/message-chairman",
    },
    {
      image: "/images/client/02.jpg",
      title: "Message From Registrar",
      message:
        "A professional engineer is competent by virtue of his/her fundamental education and training to apply the scientific method and outlook to the analysis and solution of engineering problems. He/she is able to assume personal responsibility...",
      name: "Er. Shiw Mangal Giri",
      regNo: "NEC Reg. No. 2970 Civil",
      position: "(Registrar)",
      link: "/message-registrar",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 bg-stone-100/90 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-8 text-center">
          <h3 className="mb-4 text-2xl sm:text-3xl font-semibold">
            Messages from Leadership
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
          {messages.map((message, index) => (
            <MessageCard
              key={index}
              image={message.image}
              title={message.title}
              message={message.message}
              name={message.name}
              regNo={message.regNo}
              position={message.position}
              link={message.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;