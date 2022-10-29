import Link from 'next/link'
const Index=()=>{
  return (
  <><div className="h-screen w-full flex xsm:justify-center">
  <div className="w-[58.4%] x:hidden xsm:hidden"><img src="/home.jpg" alt="" /></div>
  <div className="flex-col w-[42%] xsm:w-[100%]">
    <div className="flex mt-14 justify-center h-28 w-full "><img src="ptulogo.png" className="h-full  w-28"  alt="" /></div>
  <div className="text-center mt-1 text-2xl font-normal">Sign in</div>
  <div className='px-8'>
    <form action="">
      <div className="flex-col justify-center mt-6 w-full">
  <div className="flex justify-center h-14 xsm:ml-0 "><input type="text" className="border pl-4  text-lg   rounded border-gray-300 w-full hover:border-black outline-none" placeholder="Userid *"/> </div>
  <div className="flex justify-center h-14  mt-6 xsm:ml-0"><input type="text" className="border text-lg   pl-4 rounded border-gray-300 w-full hover:border-black outline-none" placeholder="Password *"/> </div>
      </div>
      <div className='shadow-lg'><div className=" mt-8 bg-indigo-700 h-9 rounded  text-center pt-2 text-sm font-semibold text-white shadow-2xl">SIGN IN</div></div>
    </form>
<div className="underline text-right mt-7 text-blue-800 text-sm tracking-normal"><Link href="/">Reset Password</Link></div>
  <div className="flex justify-end mt-3 "><div className="h-7 rounded w-[250px] xsm:w-[150px] text-center pt-[6px]  outline outline-1 text-rose-500 text-xs  outline-rose-400 font-semibold">ANNOUNCEMENTS</div></div>
  <div className=" mt-10 text-center text-gray-400 font-[20] text-sm">Copyright © IK Gujral Punjab Technical University 2022.</div>
</div>
  </div>
</div>
</>
)
}
export default Index