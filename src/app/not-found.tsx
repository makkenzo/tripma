import Navbar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-[1360px] w-full mx-auto">
            <Navbar />
            <div className="bg-[#93B4F6] p-12 rounded-xl mt-36">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-10 my-auto mx-auto">
                        <p className="text-[5rem] font-semibold w-[700px] leading-[5rem] text-white">
                            It looks like you are lost in space
                        </p>
                        <Link href="/">
                            <Button className="text-2xl py-6">
                                Get back to earth
                            </Button>
                        </Link>
                    </div>
                    <Image
                        src="/svgs/404.svg"
                        alt="not_found"
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </div>
    );
}
