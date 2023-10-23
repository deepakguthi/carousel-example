
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-start  bg-blue-500 p-3">
        <Link href="/"><Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-full" /></Link>

        <ul className="flex pt-4 items-center justify-center  pl-80 ml-80">
          <li className="px-6"><Link href="/" className="text-white no-underline p-1 hover:border-2 rounded-md border-white">Home</Link></li>
          <li className="px-6"><Link href="/products" className="text-white no-underline p-1 hover:border-2 rounded-md border-white">Products</Link></li>
          <li className="px-6"><Link href="/blogs" className="text-white no-underline p-1 hover:border-2 rounded-md border-white">Blogs</Link></li>
          <li className="px-6"><Link href="/about" className="text-white no-underline p-1 hover:border-2 rounded-md border-white">About</Link></li>
          <li className="px-6"><Link href="/support" className="text-white no-underline p-1 hover:border-2 rounded-md border-white">Support</Link></li>
        </ul>
      </div>
  )
}

export default Navbar