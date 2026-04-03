"use client";

import { ReactNode } from "react";

interface EmailLinkProps {
  email: string;
  children: ReactNode;
  className?: string;
}

export function EmailLink({ email, children, className }: EmailLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
}
