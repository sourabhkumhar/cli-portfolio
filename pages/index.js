import Command from "@/sources/components/UI/Command";

const Home = () => {
  return (
    <div>
      <div>
        Hello, Welcome to my PORTFOLIO! <br />
        If you want to initialize getting data, use this command in terminal.
      </div>

      <Command className="mt-5" cmd="init profile" />
    </div>
  );
};

export default Home;
