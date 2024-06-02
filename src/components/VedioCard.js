import { timeAgo } from "../Utils/constants";
import { formatViews } from "../Utils/constants";
import { truncateTitle } from "../Utils/constants";

const VedioCard = (props) => {
  const { snippet, statistics } = props.vedio;
  const { channelTitle, title, thumbnails, channelId, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="inline-block p-2 max-w-sm mr-5 mb-3 hover:cursor-pointer ml-3 hover:bg-gray-100 hover:shadow-lg">
      <img className="rounded-xl w-full h-60 object-cover" src={thumbnails.maxres.url} alt="thumbnails" />
      <p className="break-words w-full text-lg font-medium">{truncateTitle(title, 65)}</p>
      <h2 className="text-gray-600">{channelTitle}</h2>
      <ul className="list-none p-0 m-0 flex text-gray-600">
        <li className="">{formatViews(viewCount)} views</li>
        <li className="ml-2"> • {timeAgo(publishedAt)}</li>
      </ul>
    </div>
  );
};

export default VedioCard;
