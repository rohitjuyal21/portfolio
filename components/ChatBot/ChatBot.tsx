"use client";
import {
  ChatCircleDotsIcon,
  PaperPlaneTiltIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Dialog } from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { Input } from "../ui/input";
import ReactMarkdown from "react-markdown";
import TypingAnimation from "./TypingAnimation";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatHistory((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);
    setMessage("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          message,
          chatHistory: chatHistory.slice(-5),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.text,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setChatHistory([
      ...chatHistory,
      {
        role: "assistant",
        content: "Hey 👋, you found me! I'm Rohit — what do you want to know?",
      },
    ]);
  }, []);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="fixed bottom-4 right-4 rounded-full h-12 w-12 "
          >
            <ChatCircleDotsIcon size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-2xl max-h-[90vh] h-full [&>button]:hidden">
          <VisuallyHidden>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-4 bg-muted/10 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/me.png"
                      alt="me"
                      width={200}
                      height={200}
                      className="object-cover translate-x-0.5 translate-y-2 w-full h-full scale-150"
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold">Chat with me</h1>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full size-8"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto h-full">
              {chatHistory.map((message, index) => (
                <div key={index}>
                  {message.role === "assistant" ? (
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <Image
                          src="/me.png"
                          alt="me"
                          width={200}
                          height={200}
                          className="object-cover  translate-y-2 w-full h-full scale-150"
                        />
                      </div>
                      <div className="text-xs border bg-muted/10 rounded-r-2xl rounded-bl-2xl p-2">
                        <ReactMarkdown
                          components={{
                            a: ({ children, href }) => (
                              <a
                                href={href}
                                target="_blank"
                                className="underline underline-offset-2 hover:text-foreground/80"
                              >
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-end">
                      <div className="text-xs border-transparent bg-muted rounded-l-2xl rounded-br-2xl p-2">
                        {message.content}
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-muted flex items-center justify-center border">
                        <UserIcon className="size-4" />
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Image src="/me.png" alt="me" width={200} height={200} />
                  </div>
                  <div className="text-xs border bg-muted/10 rounded-r-2xl rounded-bl-2xl p-2 flex items-center justify-center">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t bg-muted/10">
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <Input
                  placeholder="Type your message here..."
                  className="bg-background h-10 rounded-full"
                  autoFocus
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="rounded-full size-9"
                >
                  <PaperPlaneTiltIcon className="size-5" />
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
