type Props = {
  children: React.ReactNode;
};

export const LearnSection = ({ children }: Props) => {
  return (
    <section className="border-4 p-6 mb-8 max-w-screen-md mx-auto">
      {children}
    </section>
  );
};
