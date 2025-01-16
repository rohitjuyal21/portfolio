import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { BiX } from "react-icons/bi";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface WinDialogProps {
  score: number;
  isOpen: boolean;
  onClose: () => void;
  onRestart: () => void;
}

const WinDialog = ({ score, isOpen, onRestart }: WinDialogProps) => {
  const bestScore = localStorage.getItem("tenziesBestScore");
  return (
    <Dialog.Root open={isOpen} onOpenChange={onRestart}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/90 fixed inset-0 flex items-center justify-center" />
        <Dialog.Content className="fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-background border rounded-xl max-w-lg  p-6 w-[90%]">
          <VisuallyHidden.Root>
            <Dialog.Title>Win Dialog</Dialog.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <Dialog.Description>Win Dialog Description</Dialog.Description>
          </VisuallyHidden.Root>
          <div className="flex flex-col gap-6 items-center justify-center my-6">
            <h1 className="text-4xl font-bold">You Win! 🎉</h1>
            <p className="text-lg font-medium">Your Score: {score}</p>
            <p className="text-lg font-medium">
              Best Score: {bestScore || score}
            </p>
            <button
              onClick={() => onRestart()}
              className="bg-primary text-background py-2 px-4 rounded-md font-medium flex items-center justify-center text-sm hover:shadow-md active:translate-y-1"
            >
              Restart Game
            </button>
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <BiX size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WinDialog;
