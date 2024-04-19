import Card, { CardProps } from "./card";

const FrequentlyQuestions = () => {
  const qa: CardProps[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];
  return (
    <div className="frequently-questions md:px-20 max-md:px-10">
      <h1 className="font-[600] text-[27px] text-primary text-center">
        Frequently asked questions
      </h1>
      {qa.map((item, index) => (
        <Card title={item.title} description={item.description} key={index} />
      ))}
    </div>
  );
};

export default FrequentlyQuestions;
