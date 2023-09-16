import { useState } from "react";
import { CustomPasswordField, CustomTextField } from "../../InputFields";
import Link from "next/link";

const Password = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    // const [currentPassword, setCurrentPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleCurrentPasswordChange = (event) => {
        const value = event.target.value;
        setCurrentPassword(value);
    }

    const handleNewPasswordChange = (event) => {
        const value = event.target.value;
        setNewPassword(value);
    }

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
    }

    const handleSubmit = () => {

    }

    const handleBack = () => {

    }

    return (
        <div className="text-[14px] p-[20px]">
            <div className="bg-[white] w-full rounded-[25px] p-[20px] flex flex-col gap-[20px]">
                <p className="text-[20px] font-semibold">Change Password</p>
                <div className="text-[16px]">
                    <span className="font-medium">User Id:</span>
                    <span className="ml-[5px] font-bold">testadmin@gmail.com</span>
                </div>

                <CustomTextField label="Current Password" value={currentPassword} handleChange={handleCurrentPasswordChange} />
                <CustomPasswordField label="New Password (Minimum 8 Characters)" value={newPassword} handleChange={handleNewPasswordChange} />
                <CustomPasswordField label="Confirm Password" value={confirmPassword} handleChange={handleConfirmPasswordChange} />

                <div className="flex gap-[20px]">
                    <Link href="/?modal=password-updated" ><button className="w-[108px] h-[40px] bg-[#0071E7] rounded-[25px] text-white font-semibold flex justify-center items-center" onClick={handleSubmit}>Submit</button></Link>
                    <button className="w-[108px] h-[40px] bg-white border-[1px] border-[#0071E7] rounded-[25px] text-[#0071E7] font-semibold flex justify-center items-center" onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Password;