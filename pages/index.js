import Command from "@/sources/components/UI/Command";

const Home = () => {
  return (
    <div>
      <div>
        Hello and welcome to my portfolio!
        <br />
        To access the portfolio, please use the command below.
        <br />
        You can also view the list of available commands by checking the command
        list. <span className="text-[#6adf93]">Enjoy exploring!</span>
      </div>

      <Command className="mt-5" cmd="init profile" />
    </div>
  );
};

export default Home;
