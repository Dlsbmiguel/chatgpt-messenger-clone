import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const NewChat = () => {
  return (
    <div className="border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
