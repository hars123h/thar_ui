import React from 'react';
import setting_bank from '../images/setting_bank.png';
import setting_pwd from '../images/setting_pwd.png';
import { useNavigate, useLocation } from 'react-router-dom';


const Settings = () => {

    const navigate = useNavigate();
    const loc = useLocation();
    //console.log(loc);

    //[#2e9afe]
    return (
        <div className='bg-red-800 h-screen'>
            <div className="options flex items-center text-center text-white bg-red-800 text-lg p-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/mine')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className='flex-grow'>Settings</div>
            </div>

            {/* [#4daaff] */}
            <div className="box mx-2 bg-red-400 p-2 rounded-md mt-4">
                <div onClick={() => navigate('/bank', {state:{withdrawalPassword:loc.state.withdrawalPassword, loginPassword:loc.state.loginPassword}})} className='flex gap-2 items-center text-white text-lg p-3 m-1 border-b border-white cursor-pointer'>
                    <div><img src={setting_bank} alt="bnk_img" width={30}/></div>
                    <div>My Bank</div>
                </div>

                <div onClick={()=>navigate('/change_login_password', {state:{withdrawalPassword:loc.state.withdrawalPassword, loginPassword:loc.state.loginPassword}})} className='flex gap-2 items-center text-white text-lg p-3 m-1 border-b border-white cursor-pointer'>
                    <div><img src={setting_pwd} alt="bnk_pwd" width={30}/></div>
                    <div>Change Login Password</div>
                </div>

                <div onClick={()=>navigate('/change_withdrawal_password', {state:{withdrawalPassword:loc.state.withdrawalPassword, loginPassword:loc.state.loginPassword}})} className='flex gap-2 items-center text-white text-lg p-3 m-1 border-b border-white cursor-pointer'>
                    <div><img src={setting_pwd} alt="bnk_pwd" width={30}/></div>
                    <div>Change Withdrawal Password</div>
                </div>
            </div>
        </div>
    )
}

export default Settings