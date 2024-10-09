import React from 'react'
import { FcSurvey } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";


const Workflow = () => {
    return (
      
            <div className="page-wrapper bg-[url('assets/images/workflow/workflow.png')] bg-cover bg-center bg-no-repeat">
                <section className="process py-5">
                    <div className="container">
                        <div className="section-title text-center ">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title text-blue-gray-800">work process</p>

                            </div>
                            <h2 className="section-title__title text-3xl text-gray-700 font-normal">Our easy work process <br /> in 4 steps</h2>
                        </div>
                        <div className="process__inner">
                            <div className="process-shape-1 hidden md:block w-full">
                                <img src="assets/image/shapes/process-shape-1.png" alt="" />
                            </div>
                            <div className="row">

                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="process__single">
                                        <div className="process__icon-box">
                                            <div className="process__icon">
                                                <span><FcSurvey /></span>
                                            </div>
                                            <div className="process__count"></div>
                                        </div>
                                        <div className="process__content">
                                            <h3 className="process__title">Select insurance</h3>
                                           
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="process__single md:mt-[120px]">
                                        <div className="process__icon-box">
                                            <div className="process__icon">
                                                <span><FcCollaboration /></span>
                                            </div>
                                            <div className="process__count"></div>
                                        </div>
                                        <div className="process__content">
                                            <h3 className="process__title">Schedule meeting</h3>
                                           
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="process__single process__single-3">
                                        <div className="process__icon-box">
                                            <div className="process__icon">
                                                <span><FcBusinessman /></span>
                                            </div>
                                            <div className="process__count"></div>
                                        </div>
                                        <div className="process__content">
                                            <h3 className="process__title">Meet agent</h3>
                                           
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="process__single process__single-4">
                                        <div className="process__icon-box">
                                            <div className="process__icon">
                                                <span><FcBriefcase /></span>
                                            </div>
                                            <div className="process__count"></div>
                                        </div>
                                        <div className="process__content">
                                            <h3 className="process__title">Get insurance</h3>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                     
                    </div>
                </section>



            </div>
    )
}

export default Workflow