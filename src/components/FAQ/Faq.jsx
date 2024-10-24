import React, { useState } from "react";

 const listoffnq = [
    {
        "header": "WHAT DOES INSURANCE MEAN?",
        "text": "Insurance is a method in which the losses suffered by a few are spread over many, exposed to similar risks. It serves as a cover against financial loss arising from unanticipated occurrences."
    },
    {
        "header": "WHY IS INSURANCE NEEDED?",
        "text": "Insurance protects against unexpected financial losses. While it doesn't remove the risk, it compensates for losses through premium payments, transferring the cost of major losses to the insurance company. It operates on the principle of shared risk, where a group pays premiums to a common pool to cover individual losses."
    },
    {
        "header": "WHAT IS GENERAL INSURANCE?",
        "text": "General Insurance covers all risks other than life, including motor vehicles, industries, transit of goods, personal accidents, aviation, and credit risks."
    },
    {
        "header": "WHAT IS LIFE INSURANCE?",
        "text": "Life Insurance is a contract between the insurer and the insured, under which the insurer pays a designated person a sum of money upon the death of the policyholder or other covered events like critical illness."
    },
    {
        "header": "WHAT IS HEALTH INSURANCE?",
        "text": "Health Insurance is a type of insurance that covers medical expenses, generally upon the hospitalization of insured person(s)."
    },
    {
        "header": "ABOUT BROKER?",
        "text": "An insurance broker is an intermediary between the insured and insurance companies, knowledgeable about various insurance products. There are five categories of insurance brokers: (i) Direct Broker (Life), (ii) Direct Broker (General), (iii) Direct Broker (Life & General), (iv) Reinsurance Broker, and (v) Composite Broker."
    },
    {
        "header": "WORK OF BROKER?",
        "text": "Insurance brokers assess risks, obtain the best cover at optimal prices, arrange policy documents, assist in claims, and remind clients about renewals and necessary corrections. They provide expert advice to protect their clients' interests."
    },
    {
        "header": "BENEFIT OF BROKER?",
        "text": "Using insurance brokers offers benefits like cost savings, market knowledge, simplicity, professionalism, more choices, stress-free claims, impartial advice, and long-term relationships."
    },
    {
        "header": "HOW DO I CHOOSE A BROKER?",
        "text": "Choose an insurance broker who is a member of the Insurance Brokers Association of India. Ask for referrals, check references, determine your coverage needs, and learn about their specialized experience."
    },
    {
        "header": "WHAT IS RISK MANAGEMENT?",
        "text": "Brokers suggest risk management procedures to reduce risks and save on insurance premiums. This can include installing safety systems, implementing safer working practices, and financial risk management techniques."
    },
    {
        "header": "HOW MUCH INSURANCE DO I NEED?",
        "text": "Ensure sufficient coverage for each policy based on the market value or reinstatement value of assets. If the sum insured doesn't meet requirements, the insured must cover the exposed segment."
    },
    {
        "header": "DO I NEED COVER RIGHT NOW?",
        "text": "Recognizing risks and insuring against them as soon as possible is essential, as accidents can occur unexpectedly. Almost anything with financial worth can be covered under insurance."
    },
    {
        "header": "WHAT DOES PREMIUM MEAN?",
        "text": "Premium is the amount paid periodically to maintain insurance coverage. It involves filling out a proposal form that serves as the basis of the insurance contract."
    },
    {
        "header": "WHAT IS UNDERWRITING?",
        "text": "Underwriting is the process financial service providers use to assess risks and decide premium rates for insurance contracts."
    },
    {
        "header": "WHAT IS DEDUCTIBLE?",
        "text": "A deductible is the portion of any claim not covered by the insurance provider, which the insured must pay before benefits apply."
    },
    {
        "header": "CAN I CHANGE BROKER AT ANY TIME?",
        "text": "Yes, you can change brokers without risk to your insurance program. Policies typically last for twelve months, but a new broker can start acting on your behalf anytime."
    },
    {
        "header": "WHO IS THE BROKER WORKING FOR?",
        "text": "Insurance brokers work for clients, not insurance companies, ensuring clients benefit from convenience, knowledge, choice, innovation, and professionalism."
    },
    {
        "header": "HOW ARE INSURANCE BROKERS PAID?",
        "text": "Brokers are generally paid by commissions from insurance companies, with clients not needing to pay for their services. In complex cases, a pre-negotiated fee may apply."
    },
    {
        "header": "HOW CAN I BE SURE THEY ARE NOT JUST SELLING ME A PRODUCT OFF THE SHELF?",
        "text": "Brokers at Notion Insurance aim for long-term relationships and prioritize finding suitable products tailored to clients' needs, ensuring ethical and professional service."
    }
];

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[50px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
              Frequently Asked Questions 
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              {/* <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {listoffnq.slice(0, Math.ceil(listoffnq.length / 2)).map((item, index) => (
              <AccordionItem key={index} header={item.header} text={item.text} />
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {listoffnq.slice(Math.ceil(listoffnq.length / 2)).map((item, index) => (
              <AccordionItem key={index + Math.ceil(listoffnq.length / 2)} header={item.header} text={item.text} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Faq;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary ">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""}`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark ">
            {header}
          </h4>
        </div>
      </button>

      <div className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="py-3 text-base leading-relaxed text-body-color ">
          {text}
        </p>
      </div>
    </div>
  );
};

