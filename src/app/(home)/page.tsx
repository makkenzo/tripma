import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            This is public route <UserButton afterSignOutUrl="/" />
        </div>
    );
}
