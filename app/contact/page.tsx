import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 bg-white text-background flex flex-col items-start justify-center text-left p-8 gap-4">
        <h1 className="w-full text-5xl font-bold">Ready to take control <br/> of your life?
        </h1>
        <p className="text-lg w-full">
        Let&apos;s find out what you&apos;re made of.
        </p>
        <Button className="rounded-full bg-background text-white">
            Get Started
        </Button>
      </div>
    <Image className="col-span-1 object-cover w-full min-h-[90vh]" src='https://images.unsplash.com/photo-1761839258075-585182da7521?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Contact' width={500} height={500} />
    </main>
  );
}