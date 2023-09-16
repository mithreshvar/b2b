import TableRow from "./TableRow";

export default function Table({tenData=[]}) {
    return(
        <div className=" flex flex-col bg-white p-[20px] rounded-[15px] text-left ">
            <table cellPadding={'15px'} >
                <tr className="border-b-[2px] border-[#E2E2E2] ">
                    <th className="pb-[20px] pt-[5px]">User Name</th>
                    <th className="pb-[20px] pt-[5px]">Email</th>
                    <th className="pb-[20px] pt-[5px]">Phone Number</th>
                    <th className="pb-[20px] pt-[5px]">Action</th>
                </tr>
                {
                    tenData.map( ele =>{
                        return <TableRow data={ele} />
                    })
                }
            </table>
        </div>
    );
}