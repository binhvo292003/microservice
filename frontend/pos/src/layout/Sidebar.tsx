import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BiStats } from 'react-icons/bi';
import { MdInventory } from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import { LuShirt } from 'react-icons/lu';
import { IoMdMenu } from 'react-icons/io';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();
    const sidebarRef = useRef<HTMLDivElement>(null);

    const Menus = [
        { title: 'Dashboard', path: '/', src: <BiStats /> },
        { title: 'Inventory', path: '/inventory', src: <MdInventory /> },
        { title: 'Order', path: '/order', src: <RiBillLine /> },
        { title: 'Product', path: '/product', src: <LuShirt /> },
    ];

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div
                ref={sidebarRef}
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <IoMdMenu
                    className={`absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-4 right-7 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link to="/">
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        {open && (
                            <span className="absolute text-xl font-medium top-4 whitespace-nowrap dark:text-white">
                                BuyFit
                            </span>
                        )}
                    </div>
                </Link>

                <ul className="pt-10">
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        mt-2 ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}
                            >
                                <span className="text-2xl">{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
