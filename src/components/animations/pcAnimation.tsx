"use client";

import Lottie from "lottie-react";
import pcAnimation from "../../../public/animations/pcAnimation.json";

export function PcAnimation() {
    return (
        <div className="fixed top-0 left-0 h-screen w-1/3 -z-10 pointer-events-none">
            <Lottie
                animationData={pcAnimation}
                loop={true}
                className="w-full h-full object-contain"
            />
        </div>
    );
}
