import { ReactNode } from "react";

interface IPageProps {
  children?: ReactNode;
}

const Page = ({ children }: IPageProps) => {
  return (
    <div className="flex justify-center align-middle h-screen bg-red-20">
      {children}
    </div>
  );
};

export default Page;
