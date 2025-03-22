export type NavLink = {
  name: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
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
  image: string;
};

export type Contact = {
  name: string;
  value: string;
  logo: React.ReactNode;
};
