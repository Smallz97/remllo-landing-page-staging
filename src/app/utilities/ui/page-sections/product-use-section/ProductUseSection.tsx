import { productUses } from "@/app/utilities/library/data";
import ProductUseCard from "@/app/utilities/ui/components/cards/ProductUseCard";

export default function ProductUseSection() {
    return (
        <div id="buffer-section" className="flex flex-col gap-[3.38rem] md:gap-[2.12rem] md:flex-row">
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
