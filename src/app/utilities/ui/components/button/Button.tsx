import clsx from "clsx";
import Link from "next/link";
import type { ButtonProps } from "@/app/utilities/library/definitions";

export default function Button({ href, children, className, ...props }: ButtonProps) {
    return (
        <Link
            href={href}
            className={clsx(
                "flex justify-center items-center w-40 lg:w-56 h-12",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
}