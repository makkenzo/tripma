import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
    return (
        <div>
            This is public route <UserButton afterSignOutUrl="/" />
            <div className="max-w-[220px] mx-auto border-2 p-4 text-center space-y-4">
                <Button variant="default">primary default</Button>
                <Button variant="inactive">primary inactive</Button>
                <Button variant="destructive">primary destructive</Button>
            </div>
        </div>
    );
}
