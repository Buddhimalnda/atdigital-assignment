import Image from "next/image";
import { useRouter } from "next/navigation";

export interface ServiceProps {
  title: string;
  description: string;
  url: string;
  img: string;
  isRightSideImg?: boolean;
}
const Service = (props: ServiceProps) => {
  const route = useRouter();
  return (
    <div
      className={
        "service " +
        (props.isRightSideImg ? "flex-row-reverse" : "justify-between")
      }
    >
      <div
        className={"img  " + (props.isRightSideImg ? "md:ml-52" : "md:mr-52")}
      >
        <Image src={props.img} alt="Web Development" width={346} height={346} />
      </div>

      <div className="content max-md:w-full">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div
          className="btn text-wizard-white"
          onClick={() => route.push(props.url)}
        >
          Learn more
        </div>
      </div>
    </div>
  );
};

export default Service;
