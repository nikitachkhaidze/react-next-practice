type ArrowButtonProps = {
    direction: "left" | "right";
};

export default function ArrowButton({ direction }: Readonly<ArrowButtonProps>) {
    return <button className={`${direction === "left" ? "-mr-2" : ""} h-8 w-8 cursor-pointer rounded-full border-none bg-none p-0 text-center align-middle text-xl text-(--text-color) transition-colors duration-200 hover:bg-(--hover-background)`}>
        {direction === "left" ? "<" : ">"}
    </button>;
}