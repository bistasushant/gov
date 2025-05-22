import { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
    { title: "HOME", href: "/" },
    {
        title: "ABOUT NEC",
        href: "#",
        submenu: [
            { title: "BACKGROUND", href: "/background" },
            { title: "OBJECTIVE AND VISION", href: "/objective-vision" },
            { title: "GOVERNING BOARD", href: "/governing-board" },
            { title: "COMMITTEES", href: "/committees" },
            { title: "ORGANIZATIONAL CHART", href: "/organizational-chart" },
            { title: "MESSAGE FROM CHAIRMAN", href: "/message-chairman" },
            { title: "MESSAGE FROM REGISTRAR", href: "/message-registrar" },
        ],
    },
    {
        title: "REGISTRATION",
        href: "#",
        submenu: [{ title: "REGISTER ONLINE", href: "/register-online" }],
    },
    {
        title: "GENERAL ENGINEERS",
        href: "#",
        submenu: [
            { title: "HARDCOPY REGISTERED (BEFORE 2020)", href: "/hardcopy-registered" },
            { title: "ONLINE REGISTERED (AFTER 2020)", href: "/online-registered" },
        ],
    },
    {
        title: "MORE",
        href: "#",
        submenu: [
            { title: "RECOGNIZED INSTITUTIONS", href: "/recognized-institutions" },
            { title: "PROFESSIONAL ENG", href: "/professional-eng" },
            { title: "DOWNLOADS", href: "/downloads" },
            { title: "CONTACT US", href: "/contact" },
        ],
    },
];
