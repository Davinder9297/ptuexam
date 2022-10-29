import Link from 'next/link'
const Index=()=>{
  return (
  <><div className="h-screen w-full flex ">
  <div className="w-[58.4%]  "><img src="/home.jpg" alt="" /></div>
  <div className="flex-col w-[40%] ">
    <div className="flex mt-14 justify-center h-28 w-full "><img src="ptulogo.png" className="h-full w-28"  alt="" /></div>
  <div className="text-center mt-1 text-2xl font-normal">Sign in</div>
  <div>
    <form action="">
      <div className="flex-col justify-center mt-6 ">
  <div className="flex justify-center h-14 ml-6"><input type="text" className="border pl-4 text-lg  text-black rounded border-gray-300 w-full hover:border-black outline-none" placeholder="Userid *"/> </div>
  <div className="flex justify-center h-14 ml-6 mt-6"><input type="text" className="border text-lg  text-black pl-4 rounded border-gray-300 w-full hover:border-black outline-none" placeholder="Password *"/> </div>
      </div>
      <div className="w-[95.5%] mt-8 bg-indigo-600 h-9 rounded ml-6 text-center pt-2 text-sm font-semibold text-white shadow-2xl">SIGN IN</div>
    </form>
  </div>
  <div className="underline text-right mt-6 text-blue-800"><Link href="/">Reset Password</Link></div>
  <div className="flex justify-end mt-3"><div className="h-7 rounded w-64 text-center border text-rose-500 text-xs pt-1 border-rose-300 font-bold">ANNOUNCEMENTS</div></div>
  <div className="flex mt-10 justify-center text-gray-500 text-sm">Copyright © <div className="mx-1">IK Gujral Punjab Technical University </div> 2022.</div>
  </div>
  <div className="sm"></div>
</div>
</>
)
}
export default Index