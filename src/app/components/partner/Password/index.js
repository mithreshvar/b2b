import { useState } from "react";
import { CustomPasswordField, CustomTextField } from "../../InputFields";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Password = () => {

    const router = useRouter();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState('');
    const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('');
    const [confirmPasswordErrorMessage , setConfirmPasswordErrorMessage ]= useState('');

    const handlePasswordErrorCheck = (value, setPasswordErrorMessage) =>{
        
        if (value === "") {
            setPasswordErrorMessage("Password cannot be empty");
            return false;
          } else if (value.length < 8) {
            setPasswordErrorMessage("Password must be at least 8 characters long");
            return false;
          } else {
            setPasswordErrorMessage("");
            return true;
        }

    }

    const handleCurrentPasswordChange = (event) => {
        const value = event.target.value;
        setCurrentPassword(value);
        handlePasswordErrorCheck(value, setCurrentPasswordErrorMessage);        
    }

    const handleNewPasswordChange = (event) => {
        const value = event.target.value;
        setNewPassword(value);
        handlePasswordErrorCheck(value, setNewPasswordErrorMessage);
    }

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        handlePasswordErrorCheck(value, setConfirmPasswordErrorMessage);
        if (value !== newPassword ){
            setConfirmPasswordErrorMessage("New password & Confirm password doesn't match");
        }
    }

    const handleSubmit = () => {

        const cuPass = handlePasswordErrorCheck(currentPassword, setCurrentPasswordErrorMessage);
        const nePass = handlePasswordErrorCheck(newPassword, setNewPasswordErrorMessage);
        const coPass = handlePasswordErrorCheck(confirmPassword, setConfirmPasswordErrorMessage);

        if ( cuPass && nePass && coPass ){
            if (newPassword !== confirmPassword){
                setConfirmPasswordErrorMessage("New password & Confirm password doesn't match");
            }
            else{
                router.push("/?modal=password-updated");
            }
        }
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

                <CustomTextField label="Current Password" value={currentPassword} handleChange={handleCurrentPasswordChange} errorMessage={currentPasswordErrorMessage} />
                <CustomPasswordField label="New Password (Minimum 8 Characters)" value={newPassword} handleChange={handleNewPasswordChange} errorMessage={newPasswordErrorMessage} />
                <CustomPasswordField label="Confirm Password" value={confirmPassword} handleChange={handleConfirmPasswordChange} errorMessage={confirmPasswordErrorMessage} />

                <div className="flex gap-[20px]">
                    <button className="w-[108px] h-[40px] bg-[#0071E7] rounded-[25px] text-white font-semibold flex justify-center items-center" onClick={handleSubmit}>Submit</button>
                    <button className="w-[108px] h-[40px] bg-white border-[1px] border-[#0071E7] rounded-[25px] text-[#0071E7] font-semibold flex justify-center items-center" onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Password;