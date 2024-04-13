"use client";

import Navbar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { isAlertClosedAtom, isCookieAcceptedAtom } from "@/jotai/store";
import { useAtom } from "jotai";
import { DevTools } from "jotai-devtools";
import { X } from "lucide-react";
import FlightDeals from "./_components/flight-deals";
import Hero from "./_components/hero";
import PlacesToStay from "./_components/places-to-stay";
import Testimonials from "./_components/testimonials";
import Footer from "@/components/footer";

export default function HomePage() {
    const [isAlertClosed, setIsAlertClosed] = useAtom(isAlertClosedAtom);
    const [isCookieAccepted, setIsCookieAccepted] =
        useAtom(isCookieAcceptedAtom);

    const handleCloseAlert = () => {
        setIsAlertClosed(true);
    };

    const handleCloseCookiesAlert = () => {
        setIsCookieAccepted(true);
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
            <div className="max-w-[1360px] w-full mx-auto">
                {!isCookieAccepted ? (
                    <Alert className="fixed left-4 bottom-4 w-72 bg-[#F6F6FE] rounded-md z-50 border-2 border-purpleBlue text-purpleBlue font-semibold">
                        <AlertDescription className="flex items-start flex-col gap-2">
                            <div className="flex">
                                <p className="text-lg">
                                    By using our site, you agree to eat our
                                    cookies.
                                </p>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={handleCloseCookiesAlert}
                                >
                                    <X />
                                </Button>
                            </div>
                            <div className="flex">
                                <Button onClick={handleCloseCookiesAlert}>
                                    Accept cookies
                                </Button>
                                <Button variant="link">Go to settings</Button>
                            </div>
                        </AlertDescription>
                    </Alert>
                ) : null}
                <Navbar />
                <Hero />
                <FlightDeals />
                <PlacesToStay />
                <Testimonials />
            </div>
            <div className="my-40"></div>
            <Footer />
        </>
    );
}
