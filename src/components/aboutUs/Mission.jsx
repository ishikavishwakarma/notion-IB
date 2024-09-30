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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsa natus aut quod, quibusdam iste hic quasi nisi dolorum minima id quidem aspernatur incidunt corporis. Nobis asperiores labore quibusdam corrupti.</p>
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi libero inventore eius dignissimos? Quasi delectus, quod ad, quis similique vel sint nobis aliquam nulla eum voluptatibus quibusdam fugiat asperiores vero impedit nemo ratione consectetur, neque accusantium maxime rem saepe sequi! Error a doloribus nobis cum ullam voluptatibus architecto blanditiis beatae?</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat at eius, debitis fugit exercitationem velit neque sunt, facilis magni dolore voluptatum vitae nostrum? Consectetur amet minima nisi nam veritatis!</p>
                </div>
            ),
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center mt-5">

            <Tabs value={activeTab} className="mission w-4/5 flex flex-col items-center justify-center rounded-xl shadow-xl py-3 px-6">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent w-[40vw] "
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-800 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900 font-semibold text-2xl" : "font-semibold text-gray-600 text-2xl"}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="text-md">
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
