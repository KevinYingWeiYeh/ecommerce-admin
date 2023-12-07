"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
      <Modal
        isOpen={true}
        title={"Test"}
        description={"Test"}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      >
        Children
      </Modal>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
