export interface SideNav {
    navItem: string;
    navList: Array<NavList>;
}

export interface NavList {
    name: string;
    icon: string;
    href: string;
}