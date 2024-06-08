import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-xl text-base underline hover:text-indigo-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
