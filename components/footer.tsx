import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Services',
        link: '/services'
    },
    {
        id: 4,
        name: 'Contact',
        link: '/contact'
    }
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">CMS boutique</span>
            E-commerce
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="hover:underline me-4 md:me-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; 2025 CMS boutique. All rights reserved.
            <Link href={"#"}>Desarrollado por</Link> todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
