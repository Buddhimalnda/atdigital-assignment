"use client";
import Footer, { FooterProps } from "@/components/footer";
import Hero from "@/components/hero";
import ATDLogo from "@/components/icons/Logo";
import ATDTitle from "@/components/icons/Title";
import Navbar, { NavbarProps } from "@/components/navbar";
import Service, { ServiceProps } from "@/components/services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from "@/public/assets/img/web.png";
import img2 from "@/public/assets/img/search.png";
import FrequentlyQuestions from "@/components/frequentlyQuestions";

export default function Home() {
  const __navbar = {
    logo: <ATDTitle />,
    menus: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Services",
        path: "/services",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "CAREERS",
        path: "/CAREERS",
      },
    ],
  };
  const __footer = {
    logo: <ATDTitle />,
    description:
      "Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.",
    technologies: [
      {
        name: "ReactJS",
      },
      {
        name: "Gatsby",
      },
      {
        name: "NextJS",
      },
      {
        name: "NodeJS",
      },
    ],
    services: [
      {
        name: "Social media Marketing",
        url: "/services/web-development",
      },
      {
        name: "Web & Mobile App Development",
        url: "/services/mobile-development",
      },
      {
        name: "Data & Analytics",
        url: "/services/ui-ux-design",
      },
    ],
    menus: [
      {
        name: "Privacy Policy",
        path: "#",
      },
      {
        name: "Terms of Service",
        path: "#",
      },
    ],
  };
  const services: ServiceProps[] = [
    {
      title: "Web & Mobile App Development",
      description:
        "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      url: "/services/web-development",
      img: img1.src,
    },
    {
      title: "Digital Strategy Consulting",
      description:
        "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
      url: "/services/mobile-development",
      img: img2.src,
      isRightSideImg: true,
    },
  ];
  return (
    <main className="overflow-hidden">
      <Navbar logo={__navbar.logo} menus={__navbar.menus} />
      <Hero />
      <div className="services">
        {services.map((item, index) => (
          <Service
            description={item.description}
            img={item.img}
            title={item.title}
            url={item.url}
            key={index}
            isRightSideImg={item?.isRightSideImg}
          />
        ))}
      </div>
      <section>
        <FrequentlyQuestions />
      </section>
      <Footer
        logo={__footer.logo}
        description={__footer.description}
        technologies={__footer.technologies}
        services={__footer.services}
        menus={__footer.menus}
      />
    </main>
  );
}
