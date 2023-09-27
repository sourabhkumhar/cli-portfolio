import Command from "@/sources/components/UI/Command";

const Home = () => {
  return (
    <div>
      <div>
        Hello, Welcome to our website! <br />
        If you want to initialize getting data, use this command in terminal.
      </div>

      <Command cmd="initialize getting data" />
    </div>
  );
};

export default Home;
