import CommandBox from "@/sources/components/UI/CommandBox";
import ExecuteLine from "@/sources/components/UI/ExecuteLine";

const InitialScreen = () => {
  return (
    <div>
      <ExecuteLine delay={1}>initializing sourabhkumhar data...</ExecuteLine>
      <ExecuteLine delay={2.5}>sourabhkumhar data is ready...</ExecuteLine>

      <ExecuteLine delay={3} className="mt-3">
        Some commands example:
      </ExecuteLine>

      <ExecuteLine
        delay={3}
        className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 border-2 mt-2 border-dashed"
      >
        <CommandBox
          cmd="get basic info"
          description="Get basic details like, name, address, occupation, etc."
        />
        <CommandBox
          cmd="list projects link"
          description="Get list of links of deployed projects which are created by me."
        />
        <CommandBox
          cmd="open cmd list"
          description="To get list of more commands to access my portfolio."
        />
      </ExecuteLine>
    </div>
  );
};

export default InitialScreen;
