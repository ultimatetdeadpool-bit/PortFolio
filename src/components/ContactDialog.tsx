"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone, Linkedin } from "lucide-react";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Feel free to reach out through any of these channels
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p className="text-base font-semibold">+1 (234) 567-890</p>
            </div>
          </a>
          
          <a
            href="mailto:alex.chen@example.com"
            className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-base font-semibold">alex.chen@example.com</p>
            </div>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Linkedin size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
              <p className="text-base font-semibold">linkedin.com/in/alexchen</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
