type Props = {
  children: React.ReactNode;
};

export const LearnPageTitle = ({ children }: Props) => {
  return <h1 className="text-4xl text-center my-7">{children}</h1>;
};
