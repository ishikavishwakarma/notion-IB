import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import ModalBox from "./ModalBox";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("generalInsurance");
  const data = [
    {
      label: "General Insurance",
      value: "generalInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex gap-2 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
        >
          <div className="flex flex-wrap max-sm:gap-1 items-start justify-center gap-3">
            <ModalBox
              text="Car Insurance"
              imgSrc="assets/images/Products/general/sport-car.png"
              link="/"
            />
            <ModalBox
              text="Travel Insurance"
              imgSrc="assets/images/Products/general/airplane.png"
              link="/"
            />
            <ModalBox
              text="2 Wheeler Insurance"
              imgSrc="assets/images/Products/general/bycicle.png"
              link="/"
            />
            <ModalBox
              text="Commercial Vehicle"
              imgSrc="assets/images/Products/general/ads.png"
              link="/"
            />
            <ModalBox
              text="Taxi Insurance"
              imgSrc="assets/images/Products/general/taxi.png"
              link="/"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Non-General Insurance",
      value: "nonGeneralInsurance",
      desc: (
        <div
          className={`nongeneralInsuranceOption flex flex-wrap max-sm:gap-2 max-sm:p-5 items-start justify-between w-full px-5 py-2 max-sm:px-5`}
        >
          <div className="w-2/5 py-5">
            <h1 className="font-semibold mb-3">Marine & Property Insurance:</h1>
            <div className="flex flex-wrap max-sm:w-[90vw] max-sm:gap-1 items-center gap-4">
              <ModalBox
                text="Marine Insurance"
                imgSrc="assets/images/Products/non-general/ship.png"
                link="/"
              />

              <ModalBox
                text="Fire & Burglary"
                imgSrc="assets/images/Products/non-general/burning-building.png"
                link="/"
              />

              <ModalBox
                text="Shop Owner Insurance"
                imgSrc="assets/images/Products/non-general/seller.png"
                link="/"
              />

              <ModalBox
                text="Office Package Policy"
                imgSrc="assets/images/Products/non-general/office-building.png"
                link="/"
              />
            </div>
          </div>
          <div className="w-3/5 py-5">
            <h1 className="font-semibold mb-2">Liability:</h1>
            <div className="flex flex-wrap max-sm:w-[90vw] max-sm:gap-1 items-center gap-5">
              <ModalBox
                text="Professional Indemnity for Doctors"
                imgSrc="assets/images/Products/non-general/medical.png"
                link="/"
              />

              <ModalBox
                text="Professional Indemnity for Companies"
                imgSrc="assets/images/Products/non-general/company.png"
                link="/"
              />

              <ModalBox
                text="Workmen Compensation"
                imgSrc="assets/images/Products/non-general/engineer.png"
                link="/"
              />

              <ModalBox
                text="General Liability"
                imgSrc="assets/images/Products/non-general/briefcase.png"
                link="/"
              />

              <ModalBox
                text="Cyber Insurance"
                imgSrc="assets/images/Products/non-general/computer.png"
                link="/"
              />

              <ModalBox
                text="Directors & Officers Liability"
                imgSrc="assets/images/Products/non-general/boss.png"
                link="/"
              />
            </div>
          </div>
          <div className="w-3/5 py-5">
            <h1 className="font-semibold">Engineering:</h1>
            <div className="flex max-sm:w-[90vw] flex-wrap max-sm:gap-1 items-center gap-4">
              <ModalBox
                text="Contractor's All Risk"
                imgSrc="assets/images/Products/non-general/worker.png"
                link="/"
              />

              <ModalBox
                text="Erection All Risk"
                imgSrc="assets/images/Products/non-general/contruction.png"
                link="/"
              />

              <ModalBox
                text="Contractor's Plant & Machinery"
                imgSrc="assets/images/Products/non-general/piling.png"
                link="/"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Life Insurance",
      value: "lifeInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
        >
          <div className="flex flex-wrap max-sm:gap-1 items-center justify-center gap-5">
            <ModalBox
              text="Term Insurance"
              imgSrc="assets/images/Products/health/medicine.png"
              link="/"
            />

            <ModalBox
              text="Endowment Plan"
              imgSrc="assets/images/Products/health/heart-rate.png"
              link="/"
            />

            <ModalBox
              text="Whole Life Insurance"
              imgSrc="assets/images/Products/health/organization.png"
              link="/"
            />

            <ModalBox
              text="ULIP"
              imgSrc="assets/images/Products/health/cancer-ribbon.png"
              link="/"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Health Insurance",
      value: "healthInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
        >
          <div className="flex flex-wrap max-sm:gap-1 items-center justify-center gap-5">
            <ModalBox
              text="Health"
              imgSrc="assets/images/Products/health/heart-rate.png"
              link="/"
            />

            <ModalBox
              text="1 Cr Health Cover"
              imgSrc="assets/images/Products/health/protect.png"
              link="/"
            />

            <ModalBox
              text="Arogya Sanjeeva"
              imgSrc="assets/images/Products/health/risk.png"
              link="/"
            />

            <ModalBox
              text="Family Health Insurance"
              imgSrc="assets/images/Products/health/medicine.png"
              link="/"
            />

            <ModalBox
              text="Cancer Insurance"
              imgSrc="assets/images/Products/health/cancer-ribbon.png"
              link="/"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ProductTabs;