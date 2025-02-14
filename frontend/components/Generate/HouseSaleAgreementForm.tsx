"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HouseSaleAgreementForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (values) => {
    console.log("submitted");
    console.log(values);
  };

  const formData = useFormik({
    initialValues: {
      value:"type5",
      type: "housesale",
      agreementState: "",
      agreementDate: "",
      vendorName: "",
      vendorsFathersName: "",
      vendorAddress: "",
      purchaserName: "",
      purchasersFathersName: "",
      purchaserAddress: "",
      housePrice: "",
      advanceAmount: "",
      advanceAmountDate: "",
      salePeriod: "",
      verificationTime: "",
      returnOfAdvance: "",
      rateOfInterest: "",
      penaltyAmount: "",
      witnessOneName: "",
      witnessOneAddress: "",
      witnessTwoName: "",
      witnessTwoAddress: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Enter your details
                </h3>
                <br></br>
                <form onSubmit={formData.handleSubmit} id="divorce">
                  <div className="-mx-6 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="vendorName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Vendor's Name
                        </label>
                        <input
                          id="vendorName"
                          name="vendorName"
                          onChange={formData.handleChange}
                          value={formData.values.vendorName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="vendorsFathersName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Vendor Father's Name
                        </label>
                        <input
                          id="vendorsFathersName"
                          name="vendorsFathersName"
                          onChange={formData.handleChange}
                          value={formData.values.vendorsFathersName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="vendorAddress"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Vendor's Address
                        </label>
                        <input
                          id="vendorAddress"
                          name="vendorAddress"
                          onChange={formData.handleChange}
                          value={formData.values.vendorAddress}
                          type="text"
                          placeholder="Address"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="purchaserName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Purchaser's Name
                        </label>
                        <input
                          id="purchaserName"
                          name="purchaserName"
                          onChange={formData.handleChange}
                          value={formData.values.purchaserName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="purchasersFathersName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Purchaser Father's Name
                        </label>
                        <input
                          id="purchasersFathersName"
                          name="purchasersFathersName"
                          onChange={formData.handleChange}
                          value={formData.values.purchasersFathersName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="purchaserAddress"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Purchaser's Address
                        </label>
                        <input
                          id="purchaserAddress"
                          name="purchaserAddress"
                          onChange={formData.handleChange}
                          value={formData.values.purchaserAddress}
                          type="text"
                          placeholder="Address"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="agreementState"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Agreement State
                        </label>
                        <input
                          id="agreementState"
                          name="agreementState"
                          onChange={formData.handleChange}
                          value={formData.values.agreementState}
                          type="text"
                          placeholder="State"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="agreementDate"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Date of Agreement
                        </label>
                        <input
                          id="agreementDate"
                          name="agreementDate"
                          onChange={formData.handleChange}
                          value={formData.values.agreementDate}
                          type="date"
                          placeholder="Agreement Date"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="housePrice"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          House Price
                        </label>
                        <input
                          id="housePrice"
                          name="housePrice"
                          onChange={formData.handleChange}
                          value={formData.values.housePrice}
                          type="number"
                          placeholder="Price in Rs."
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="advanceAmount"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Advance Payment
                        </label>
                        <input
                          id="advanceAmount"
                          name="advanceAmount"
                          onChange={formData.handleChange}
                          value={formData.values.advanceAmount}
                          type="number"
                          placeholder="Amount in Rs."
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="salePeriod"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Sale Period(in Months)
                        </label>
                        <input
                          id="salePeriod"
                          name="salePeriod"
                          onChange={formData.handleChange}
                          value={formData.values.salePeriod}
                          type="number"
                          placeholder="Period"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="verificationTime"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Verification Time(Days)
                        </label>
                        <input
                          id="verificationTime"
                          name="verificationTime"
                          onChange={formData.handleChange}
                          value={formData.values.verificationTime}
                          type="number"
                          placeholder="Time"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="returnOfAdvance"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Return Of Advance(Days)
                        </label>
                        <input
                          id="returnOfAdvance"
                          name="returnOfAdvance"
                          onChange={formData.handleChange}
                          value={formData.values.returnOfAdvance}
                          type="number"
                          placeholder="Time"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="rateOfInterest"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Rate(%)
                        </label>
                        <input
                          id="rateOfInterest"
                          name="rateOfInterest"
                          onChange={formData.handleChange}
                          value={formData.values.rateOfInterest}
                          type="number"
                          placeholder="Rate"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="penaltyAmount"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Penalty(in Rs.)
                        </label>
                        <input
                          id="penaltyAmount"
                          name="penaltyAmount"
                          onChange={formData.handleChange}
                          value={formData.values.penaltyAmount}
                          type="number"
                          placeholder="Penalty"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="witnessOneName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Witness 1 Name
                        </label>
                        <input
                          id="witnessOneName"
                          name="witnessOneName"
                          onChange={formData.handleChange}
                          value={formData.values.witnessOneName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="witnessOneAddress"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Witness 1 Address
                        </label>
                        <input
                          id="witnessOneAddress"
                          name="witnessOneAddress"
                          onChange={formData.handleChange}
                          value={formData.values.witnessOneAddress}
                          type="text"
                          placeholder="Address"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="witnessTwoName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Witness 2 Name
                        </label>
                        <input
                          id="witnessTwoName"
                          name="witnessTwoName"
                          onChange={formData.handleChange}
                          value={formData.values.witnessTwoName}
                          type="text"
                          placeholder="Enter your name"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="witnessTwoAddress"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Witness 2 Address
                        </label>
                        <input
                          id="witnessTwoAddress"
                          name="witnessTwoAddress"
                          onChange={formData.handleChange}
                          value={formData.values.witnessTwoAddress}
                          type="text"
                          placeholder="Address"
                          className="text-body-color placeholder-body-color w-full rounded-md border border-transparent py-3 px-6 text-base shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <Link
                        href={{ pathname: "/editor", query: formData.values }}
                        className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      >
                        Submit
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HouseSaleAgreementForm;
