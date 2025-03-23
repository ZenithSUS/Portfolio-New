export type NavLink = {
  name: string;
  href: string;
  active: boolean;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
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
