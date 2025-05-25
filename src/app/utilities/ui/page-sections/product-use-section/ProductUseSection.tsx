import { productUses } from "@/app/utilities/library/data";
import ProductUseCard from "@/app/utilities/ui/components/cards/ProductUseCard";

export default function ProductUseSection() {
    return (
        <div id="why-it-matters" className="flex flex-col gap-[3.38rem] md:gap-[2.12rem] md:flex-row scroll-mt-24">
            {productUses.map(({ className, illustration, heading, text }, index) => (
                <ProductUseCard
                    key={index}
                    text={text}
                    heading={heading}
                    className={className}
                    illustration={illustration}
                />
            ))}
        </div>
    )
}
