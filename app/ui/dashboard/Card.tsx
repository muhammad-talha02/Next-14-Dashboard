import { MdSupervisedUserCircle } from "react-icons/md"

const Card = () => {
  return (
    <div className="flex gap-3 bg-[--bgSoft] rounded-lg p-3 cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-2.5">
        <span>Total Users</span>
        <span className="font-bold text-lg">10.928</span>
        <span className="text-[14px]"><b className="text-[green]">12%</b> more than previous month</span>
      </div>
    </div>
  )
}

export default Card
