import TableRow from "./TableRow";

export default function Table({headers, tenData=[], setActive}) {
    return(
        <div className=" flex flex-col bg-white p-[20px] rounded-[15px] text-left ">
            {
                (tenData.length === 0) ?
                <h1 className="text-[24px] font-bold text-center">
                    No User Found !
                </h1>
                :
                <table cellPadding={'15px'} >
                    <tr className="border-b-[2px] border-[#E2E2E2] ">
                        {headers.map( ele =><th className={`pb-[20px] pt-[5px] font-medium `}>{ele}</th>)}
                    </tr>
                    {
                        tenData.map( ele =>{
                            return <TableRow data={ele} setActive={setActive} sip={(headers[3]=='Systematic Plans')?true:false} portfolio={(headers[0]=='Portfolio Name')?true:false} />
                        })
                    }
                </table>
            }
        </div>
    );
}