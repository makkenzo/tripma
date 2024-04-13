"use client";

import Navbar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { isAlertClosedAtom, isCookieAcceptedAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import { DevTools } from "jotai-devtools";
import { X } from "lucide-react";
import Hero from "./_components/hero";

export default function HomePage() {
    const [isAlertClosed, setIsAlertClosed] = useAtom(isAlertClosedAtom);
    const [isCookieAccepted, setIsCookieAccepted] =
        useAtom(isCookieAcceptedAtom);

    const handleCloseAlert = () => {
        setIsAlertClosed(true);
    };

    return (
        <>
            {/* <DevTools /> */}
            {!isAlertClosed ? (
                <Alert className="bg-primary-global">
                    <AlertDescription className="flex justify-between items-center w-full min-w-full text-white">
                        <p></p>
                        <p className="text-lg">
                            Join Tripma today and save up to 20% on your flight
                            using code TRAVEL at checkout. Promotion valid for
                            new users only.
                        </p>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleCloseAlert}
                        >
                            <X />
                        </Button>
                    </AlertDescription>
                </Alert>
            ) : null}
            <div className="container">
                {!isCookieAccepted ? (
                    <Alert className="absolute left-4 bottom-4 w-72 bg-purple-blue">
                        <AlertDescription className="flex items-start">
                            <p className="text-lg">
                                By using our site, you agree to eat our cookies.
                            </p>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={handleCloseAlert}
                            >
                                <X />
                            </Button>
                        </AlertDescription>
                    </Alert>
                ) : null}
                <Navbar />
                <Hero />
            </div>
        </>
    );
}
