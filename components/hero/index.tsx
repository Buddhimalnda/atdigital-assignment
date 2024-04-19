import bg from "@/public/assets/img/hero.jpeg";
const Hero = () => {
  return (
    <div className="hero w-screen">
      <div
        className="img  h-[700px] w-screen"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="content">
        <h1>
          We crush your competitors, goals, And sales records - without the B.S.
        </h1>
        <div className="btn">Get free consultation</div>
      </div>
    </div>
  );
};

export default Hero;
