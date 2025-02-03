"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      console.log("Message sent successfully:", response);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return(
    <div className="mt-14 mx-auto mb-24 w-11/12 max-w-[500px]">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-14 mb-14">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="email@example.com" className="mb-4" onChange={(e) => setEmail(e.target.value)} />
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="John Doe" className="mb-4" onChange={(e) => setName(e.target.value)} />
        <Label htmlFor="message">Message</Label>
        <Textarea placeholder="Type your message here." id="message" className="mb-4" onChange={(e) => setMessage(e.target.value)} />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}

export default ContactForm;