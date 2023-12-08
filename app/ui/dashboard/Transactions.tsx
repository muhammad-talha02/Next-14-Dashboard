import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[--bgSoft] p-5 rounded-lg">
      <h2 className="text-[--textSoft] mb-3 font-semibold">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className={tdStyle}>Name</td>
            <td className={tdStyle}>Status</td>
            <td className={tdStyle}>Date</td>
            <td className={tdStyle}>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tdStyle}>
              <div className="flex gap-2.5">
                <Image
                  src={"/noavatar.png"}
                  width={25}
                  height={25}
                  alt="image"
                  className="rounded-3xl object-cover"
                />
                John Wick
              </div>
            </td>
            <td className={tdStyle}>
              <span
                className={`${statusPending} text-white text-[14px] p-[5px] rounded-sm`}
              >
                Pending
              </span>
            </td>
            <td className={tdStyle}>20.10.2025</td>
            <td className={tdStyle}>315.00 $</td>
          </tr>
          <tr>
            <td className={tdStyle}>
              <div className="flex gap-2.5">
                <Image
                  src={"/noavatar.png"}
                  width={25}
                  height={25}
                  alt="image"
                  className="rounded-3xl object-cover"
                />
                John Wick
              </div>
            </td>
            <td className={tdStyle}>
              <span
                className={`${statusSuccess} text-white text-[14px] p-[5px] rounded-sm`}
              >
                Succeed
              </span>
            </td>
            <td className={tdStyle}>20.10.2025</td>
            <td className={tdStyle}>315.00 $</td>
          </tr>
          <tr>
            <td className={tdStyle}>
              <div className="flex gap-2.5">
                <Image
                  src={"/noavatar.png"}
                  width={25}
                  height={25}
                  alt="image"
                  className="rounded-3xl object-cover"
                />
                John Wick
              </div>
            </td>
            <td className={tdStyle}>
              <span
                className={`${statusPending} text-white text-[14px] p-[5px] rounded-sm`}
              >
                Pending
              </span>
            </td>
            <td className={tdStyle}>20.10.2025</td>
            <td className={tdStyle}>315.00 $</td>
          </tr>
          <tr>
            <td className={tdStyle}>
              <div className="flex gap-2.5">
                <Image
                  src={"/noavatar.png"}
                  width={25}
                  height={25}
                  alt="image"
                  className="rounded-3xl object-cover"
                />
                John Wick
              </div>
            </td>
            <td className={tdStyle}>
              <span
                className={`${statusReject} text-white text-[14px] p-[5px] rounded-sm`}
              >
                Canclled
              </span>
            </td>
            <td className={tdStyle}>20.10.2025</td>
            <td className={tdStyle}>315.00 $</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tdStyle = "p-3";
const statusPending = "bg-[#f7cb7375]";
const statusSuccess = "bg-[#afd6ee75]";
const statusReject = "bg-[#f7737375]";

export default Transactions;
