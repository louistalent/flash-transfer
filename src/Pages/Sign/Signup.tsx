import React from 'react';
import Layout from '../../components/Layout';

import './Sign.scss';
import { BsArrowUp, BsArrowDown, BsChevronDown, BsChevronCompactUp, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";

const Signup = () => {
    return <Layout className="home" >
        <section className='exchange-section' style={{ background: "url('/assets/images/home/home-first-section.png')", backgroundSize: 'cover' }} >
            <div className='container pb2 pt2'>
                <div className='row justify'>
                    <div className='col-sm-12 col-md-12 col-lg-6 mt2'>
                        <h1 className=''>
                            Use Flash Transfer service to <span className='primary-color'>send</span>, <span className='primary-color'>buy</span> or <span className='primary-color'></span>sell your crypto for <span className='primary-color'>cash worldwide</span> in the world.
                        </h1>
                        <p className='gray-color'>
                            Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using a Binance account or using your no-custodial wallet ( Flash wallet, Metamask, Binance wallet, Trust wallet ...)
                        </p>
                        <div className='dis-f ai-c gap10 mt1'>
                            <button className='btn black-bg white-color'>Get started</button>
                            <button className='btn transparent-bg pb0 pt0'>
                                <img className="" width='100%' height='40px' src='/assets/images/trustpilot.png' alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 mt2'>
                        <div className='exchange-container w9'>
                            <div className='exchange-box tc'>
                                <p className='black-color bold'>
                                    Connected Wallet
                                </p>
                                <div className='justify gap10'>
                                    <img src="/assets/images/tokens/bnb-b.png" width="30px" height="30px" alt="" />
                                    <h2 className=''>BINANCE</h2>
                                </div>
                            </div>

                            <div className='exchange-box mt2 justify-s'>
                                <div className=''>
                                    <div className='bold'>Amount Send</div>
                                    <div>
                                        <input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='pink-box'>
                                        <div className='justify gap10'>
                                            <img className='' width={'48px'} height={'48px'} src="/assets/images/tokens/busd.png" alt="" />
                                            <div>BUSD</div>
                                        </div>
                                        <div className='justify'>
                                            <BsChevronDown fontSize={'16px'} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt2 mb2 dis-f ac-c jc-e gap20'>
                                <div className="justify po-re">
                                    <BsArrowUp className='po-ab' style={{ left: '-7px' }} fontSize={'23px'} />
                                    <BsArrowDown className='po-ab' style={{ right: '-6px' }} fontSize={'23px'} />
                                </div>
                                <div className=''>
                                    1 <span style={{ color: '#F9AA4B' }}>BUSD</span> = 1 EUR
                                </div>
                            </div>

                            <div className='exchange-box mt2 justify-s'>
                                <div className='dis-f fd-c jc-sb h10'>
                                    <div className='bold'>Received Amount</div>
                                    <div>
                                        <input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='pink-box'>
                                        <div className='justify gap10'>
                                            <img className='' width={'48px'} height={'48px'} src="/assets/images/flags/france.png" alt="" />
                                            <div>Euro</div>
                                        </div>
                                        <div className='justify'>
                                            <BsChevronDown fontSize={'16px'} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='grey-color'>Fee</div>
                                    <div className=''>+2.50 EUR</div>
                                </div>
                            </div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='grey-color'>Transfer Time</div>
                                    <div className=''>1 Min</div>
                                </div>
                            </div>
                            <div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='purple-color'>Total to pay</div>
                                    <div className=''>102.50 BUSD</div>
                                </div>
                            </div>
                            <div className='mt2'>
                                <div className='justify-s'>
                                    <div className='purple-color'>Recipient Gets</div>
                                    <div className=''>100.00 EUR</div>
                                </div>
                            </div>
                            <div className='mt2 justify'>
                                <button className='btn black-bg white-color w10'>
                                    Continue
                                </button>
                            </div>
                            <div className='mt2 justify'>
                                <button className='btn transparent-bg w10 grey-border'>
                                    Cancel
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='choose res-pt7 res-pb7'>
            <div className='container'>
                <div className='w10 tc'>
                    <h1 className='white-color'>Why Choose Us</h1>
                    <h5 className='white-color pt2'>Send & Receive money to your loved ones in minutes with great rates and low fees.</h5>
                    <h5 className='white-color'>Over 180 countries and 30 currencies supported.</h5>
                </div>
                <div className='mt1'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 mt3'>
                            <div className='choose-box'>
                                <div className='choose-img-center'>
                                    <div className='choose-iconbox'>
                                        <img src="/assets/images/icons/counter.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt3 black-color bold'>Speed</div>
                                <div className='mt3 gray-color'>
                                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4 mt3'>
                            <div className='choose-box'>
                                <div className='choose-img-center'>
                                    <div className='choose-iconbox'>
                                        <img src="/assets/images/icons/six-angle.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt3 black-color bold'>Security</div>
                                <div className='mt3 gray-color'>
                                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4 mt3'>
                            <div className='choose-box'>
                                <div className='choose-img-center'>
                                    <div className='choose-iconbox'>
                                        <img src="/assets/images/icons/loop.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt3 black-color bold'>Easy Transfer</div>
                                <div className='mt3 gray-color'>
                                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* img layout */}
                <div className=''>
                    {/* top five images */}
                    <div className=''>
                        <img className='po-ab' style={{ opacity: '0.4', left: '10%', top: '10px' }} src="/assets/images/vector/target.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', left: '15%', top: '70px' }} src="/assets/images/vector/target.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', left: '20%', top: '60px' }} src="/assets/images/vector/plan.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', left: '10%', top: '120px' }} src="/assets/images/vector/big-plan.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', left: '22%', top: '100px' }} src="/assets/images/vector/wallet.png" alt="" />
                    </div>
                    {/* bottom three images */}
                    <div className=''>
                        <img className='po-ab' style={{ opacity: '0.4', right: '4%', bottom: '100px' }} src="/assets/images/vector/plan.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', right: '7%', bottom: '20px' }} src="/assets/images/vector/big-plan.png" alt="" />
                        <img className='po-ab' style={{ opacity: '0.4', right: '2%', bottom: '40px' }} src="/assets/images/vector/wallet.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className='main-futures res-pt6 res-pb6'>
            <div className='container'>
                <div className='row ai-c'>
                    <div className='col-sm-12 col-md-6'>
                        <h1 className='bold'>
                            Fast, <span className='grey-color'>Secure</span>
                        </h1>
                        <h1 className=''>
                            Money Transfers
                        </h1>
                        <div className='dis-f gap20 mt1'>
                            <div className='main-futures-box'>
                                <img className='' src="/assets/images/icons/team.png" alt="" />
                            </div>
                            <div className=''>
                                <h4 className='bold'>First Advantage</h4>
                                <p className='grey-color'>Ac tincidunt sapien vehicula erat auctor <br />
                                    pellentesque rhoncus. Et magna sit morbi <br /> lobortis.</p>
                            </div>
                        </div>
                        <div className='dis-f gap20 mt1'>
                            <div className='main-futures-box'>
                                <img className='' src="/assets/images/icons/clock.png" alt="" />
                            </div>
                            <div className=''>
                                <h4 className='bold'>Second Advantage</h4>
                                <p className='grey-color'>Ac tincidunt sapien vehicula erat auctor <br />
                                    pellentesque rhoncus. Et magna sit morbi <br /> lobortis.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 dis-f jc-e'>
                        <img className='' style={{ borderRadius: '15px', width: '85%' }} src="/assets/images/home/transfer.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </Layout>;
};

export default Signup;