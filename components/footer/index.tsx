import Image from "next/image";
import { it } from "node:test";

export interface FooterProps {
  logo: JSX.Element;
  description: string;
  technologies: {
    name: string;
  }[];
  services: {
    name: string;
    url: string;
  }[];
  menus: {
    name: string;
    path: string;
  }[];
}
const Footer = (props: FooterProps) => {
  return (
    <footer>
      <section>
        <div className="about">
          <div className="logo">
            <div className="icon">{props.logo}</div>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
        </div>
        <div className="links">
          <div className="technologies sec">
            <Title title="Our Technologies" />
            {props.technologies.map((technology, index) => (
              <Item
                key={index}
                item={technology.name}
                isLink={false}
                isLastIndex={true}
              />
            ))}
          </div>
          <div className="services sec">
            <Title title="Our Services" />
            {props.services.map((service, index) => (
              <Item
                key={index}
                item={service.name}
                isLink={true}
                url={service.url}
                isLastIndex={true}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bottom-nav">
        <div className="hr"></div>
        <div className="menus">
          {props.menus.map((menu, index) => (
            <div className="menu-item">
              <Item
                key={index}
                item={menu.name}
                isLink={true}
                url={menu.path}
                isLastIndex={index === props.menus.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const Title = (props: { title: string }) => {
  return <h1>{props.title}</h1>;
};
const Item = (props: {
  item: string;
  isLink: boolean;
  url?: string;
  isLastIndex: boolean;
}) => {
  if (props.isLink) {
    return <a href={props.url}>{props.item}</a>;
  } else {
    return <div className={"item "}>{props.item}</div>;
  }
};

export default Footer;
