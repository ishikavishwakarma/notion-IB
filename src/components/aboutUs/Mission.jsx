import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";


const Mission = () => {
    const [activeTab, setActiveTab] = useState("ourMission");
    const data = [
        {
            label: "Our Mission",

            value: "ourMission",
            desc: (
                <div
                    className={`flex-col ourMission flex gap-2 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>"Our Endeavour is to formulate risk-based insurance program by conducting insurance audits & selecting the best combination of insurance coverages at an optimum cost of the customers."</p>
                </div>
            ),
        },
        {
            label: "Our vision",
            value: "ourVission",
            desc: (
                <div
                    className={`ourVission flex flex-wrap max-sm:gap-2 max-sm:p-5 items-start justify-between w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>"Our vision is to set the standard of excellence among Insurance providers by being innovative, being financially strong, and exceeding customer expectations. We will attract and retain the very best employees and POSP (Point of Sales Persons) to help us achieve this goal."</p>
                </div>
            ),
        },
        {
            label: "Our Goal",
            value: "ourGoal",
            desc: (
                <div
                    className={`flex-col ourGoal flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>We use our knowledge to help clients optimize their insurability and reduce costs across the full spectrum of risk. The upside is the advantage of risk well managed.</p>
                </div>
            ),
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center mt-5">

            <Tabs value={activeTab} className="mission md:w-4/5 flex flex-col items-center justify-center rounded-xl shadow-xl py-3 md:px-6">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent md:w-[40vw] w-screen"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-800 shadow-none rounded-none ",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900 font-semibold md:text-2xl" : "font-semibold text-gray-600 md:text-2xl"}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="h-[20vw]">
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="text-md text-gray-800">
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            <p className="text-md text-gray-900 font-semibold"><i>Notion Insurance Broker Pvt. Ltd.</i></p>
            </Tabs>
        </div>
    );
};

export default Mission;
