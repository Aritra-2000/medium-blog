import { Link } from "react-router-dom";

interface BlogCardProp {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProp) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 pb-4 cursor-pointer">
            <div className="flex">
                <Avatar size={"small"} name={authorName} />
                <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2 ">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col pl-2 font-thin text-slate-400 text-sm">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "....."}
            </div>
            <div className="text-slate-400 pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"}text-xs font-extralight text-gray-300`}>{name[0]}</span>
    </div>
}