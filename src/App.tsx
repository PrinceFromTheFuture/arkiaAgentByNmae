import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import { arkiaAgetns } from "./arkiaAgents";

function App() {
  const [code, setCode] = useState("");
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  const [agent, setAgent] = useState<{
    Lastname: string;
    Firstname: string;
    Username: string;
    AgentID: string;
    Email: string;
  }>();

  useEffect(() => {
    if (code.length === 2) {
      const agent = arkiaAgetns.find((agent) => agent.AgentID === code);
      if (agent !== undefined && dialogTriggerRef.current) {
        setAgent(agent);
        console.log(agent);
        dialogTriggerRef.current.click();

        setCode("");
      } else {
        return;
      }
    }
  }, [code]);

  return (
    <div className="  bg-lightGray fixed right-0 top-0 left-0 bottom-0 h-full select-none flex justify-center items-center  ">
      <div className="flex justify-between items-center flex-col h-[95%]">
        <div>created by AmirWais</div>
        <div className="w-screen flex justify-center items-center flex-col ">
          <h1 className=" text-3xl font-medium text-center mb-8">
            Type Arkia Agent iport Code:{" "}
            <span className="text-deepGray">"WA, DT, LK, NQ"</span>
          </h1>
          <input
            autoFocus
            className=" text-center max-w-[80%] w-[600px] bg-blue rounded h-9 text-white font-semibold text-lg "
            placeholder="WA"
            maxLength={2}
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toLocaleUpperCase())}
          />
        </div>
        <div>imidate service supoort: 03-6903456</div>
      </div>
      <Dialog>
        <DialogTrigger ref={dialogTriggerRef}></DialogTrigger>
        <DialogContent>
          {agent && (
            <div className=" flex justify-center items-center flex-col h-[200px] w-full gap-11">
              {" "}
              <h1 className=" text-3xl font-semibold text-blue">
                Agent Name:{" "}
                <span className=" text-deepGray font-medium">
                  {agent!.Firstname} {agent!.Lastname}
                </span>
              </h1>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
