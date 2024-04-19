const Menus = (props: {
  menu: { name: string; path: string; isActive?: boolean; isBtn?: boolean }[];
}) => {
  return (
    <div className="menus font-[500]">
      {props.menu.map((menu, index) => (
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

export default Menus;
