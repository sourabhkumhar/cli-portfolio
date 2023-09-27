import CommandBox from "@/sources/components/UI/CommandBox";

const Page = () => {
  return (
    <>
      <div className="text-red-500">Invalid initiating command</div>

      <CommandBox
        cmd="reset"
        description="Reset page to re-initialize porfolio."
      />
    </>
  );
};

export default Page;
