/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div className="">
          {" "}
          {/* New chat */}
          <NewChat />
          <div className="">{/*ModelSelection*/}</div>
          {/* Map through the ChatRows*/}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Porfile picture"
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
