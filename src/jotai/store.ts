import { IPassengers, ISubmitData, Iata } from "@/types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const isAlertClosedAtom = atomWithStorage("isAlertClosed", false);
export const isCookieAcceptedAtom = atomWithStorage("isCookieAccepted", false);

export const fromAtom = atomWithStorage<Iata>("from", { iata: "", name: null });
export const toAtom = atomWithStorage<Iata>("to", { iata: "", name: null });

export const dateAtom = atom<{
    from: Date;
    to: Date;
}>({
    from: new Date(),
    to: new Date(),
});

export const roundTripAtom = atom<boolean>(false);

export const passengersAtom = atomWithStorage<IPassengers>("passengers", {
    adults: 1,
    minors: 0,
    total: 1,
});

export const submitDataAtom = atom<ISubmitData>((get) => ({
    from: get(fromAtom),
    to: get(toAtom),
    date: get(dateAtom),
    roundTrip: get(roundTripAtom),
    passengers: get(passengersAtom),
}));

if (process.env.NODE_ENV !== "production") {
    fromAtom.debugLabel = "from";
    toAtom.debugLabel = "to";
    isAlertClosedAtom.debugLabel = "alert closed";
    isCookieAcceptedAtom.debugLabel = "cookie accepted";
    passengersAtom.debugLabel = "passengers";
}
