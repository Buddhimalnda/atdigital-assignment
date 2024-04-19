const MobileNav = (props: {
  menus: { name: string; path: string; isActive?: boolean; isBtn?: boolean }[];
  isActive: boolean;
}) => {
  return (
    <div className={"mobile-menu " + (props.isActive ? "active" : "")}>
      {props.menus.map((menu, index) => (
        <a
          key={index}
          href={menu.path}
          className={
            "menu-item uppercase hover:text-acier-200 mx-5" +
            (menu?.isActive ? "active" : "")
          }
        >
          {menu.name}
        </a>
      ))}
    </div>
  );
};

export default MobileNav;
