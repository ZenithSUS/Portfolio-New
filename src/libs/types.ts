export type NavLink = {
  name: string;
  href: string;
  active: boolean;
};

export type Project = {
  title: string;
  name: string;
  description: string;
  tech: string[];
  features?: string[];
  image: string;
  href: string;
};

export type Skill = {
  name: string;
  image: string;
};

export type Social = {
  name: string;
  href: string;
  logo: React.ReactNode;
};

export type Contact = {
  name: string;
  value: string;
  logo: React.ReactNode;
};

export type Message = {
  text: string;
  sender: "user" | "assistant" | "bot" | "system";
};

export type MistralChatResponse = {
  content: string;
  response: string;
  status: string;
  code: number;
  role: string;
};
