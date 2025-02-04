import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 text-primary transition-colors hover:text-primary/75">
            <svg width="32" height="32" viewBox="0 0 1500 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_39)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M734.709 625.616L585.844 476.751L490.407 572.188C572.625 541.752 668.655 559.561 734.709 625.616Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1129.2 1020.11L585.844 476.751L585.879 476.716C676.309 386.324 822.887 386.325 913.315 476.72L749.595 313L1456.7 1020.11C1366.26 1110.54 1219.64 1110.54 1129.2 1020.11ZM749.595 313L585.879 476.716L749.595 313L749.595 313Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M529.276 831.049C463.221 764.995 367.191 747.186 284.974 777.622L380.411 682.184L529.276 831.049Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M975.869 950.141L975.809 950.201C885.367 1040.58 738.784 1040.56 648.367 950.141L380.411 682.184L380.446 682.15C470.875 591.758 617.453 591.759 707.882 682.153L544.162 518.433L975.869 950.141ZM544.162 518.433L544.162 518.433L380.446 682.15L544.162 518.433Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.0003 1021.6L189.865 872.731C272.081 790.515 405.378 790.515 487.594 872.731C492.618 877.755 497.335 882.97 501.746 888.352L353.476 1036.62C271.276 1118.67 138.143 1118.65 55.9678 1036.56L55.8867 1036.48L55.8057 1036.4C50.8119 1031.4 46.1218 1026.21 41.7354 1020.86L41.0003 1021.6L41.0003 1021.6Z" fill="currentColor"/>
                    </g>
                <defs>
                    <clipPath id="clip0_3_39">
                        <rect width="1500" height="1500" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <span className="font-semibold">Farrel Najib Anshary</span>
        </Link>
    )
}