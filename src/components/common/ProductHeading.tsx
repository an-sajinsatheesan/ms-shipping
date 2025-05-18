
interface PageHeading {
    Title: string;
    Paragraph?: string;
}

export const ProductHeading = ({ Title, Paragraph }: PageHeading) => {
    return <>
        <div className="bg-[url('./../../public/static/assets/beams-pricing.webp')] bg-no-repeat bg-center bg-cover overflow-hidden h-[350px] mb-4">
            <div className="flex flex-col w-full h-full items-center justify-around md:flex-row p-3 md:p-0 gap-2">
                <h1 className="max-w-lg text-4xl font-semibold leading-9">
                    {Title}
                </h1>
            </div>
        </div>
    </>
}
