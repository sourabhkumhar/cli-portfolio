import Command from "@/sources/components/UI/Command";

const Home = () => {
  return (
    <div>
      <div>
        Hello, Welcome to my PORTFOLIO! <br />
        If you want access portfolio, use below command.
        <br />
        Check cmd list to view all command...
      </div>

      <Command className="mt-5" cmd="init profile" />
    </div>
  );
};

export default Home;
