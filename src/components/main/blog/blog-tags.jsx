import { colorClasses } from "@/constants/tag-colors";

export default function BlogTag({tags}){
    return(
   <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((keyword, index) => {
        const color = colorClasses[index % colorClasses.length];
        return (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full transition ${color}`}
          >
            {keyword}
          </span>
        );
      })}
    </div>
    )
}