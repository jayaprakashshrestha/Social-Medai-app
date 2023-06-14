import { Avatar, Card } from "flowbite-react";

const PostComponent = ({
  _id,
  time,
  postedBy,
  description,
  name,
}): JSX.Element => {
  return (
    <div className="max-w-sm" id={_id}>
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <div className="flex justify-between place-items-center">
          <div className="flex place-items-center gap-1 ">
            <Avatar
              size="xs"
              rounded
              placeholderInitials={postedBy.username[0]}
            />
            <h3 className="text-xs">{postedBy.username}</h3>
          </div>
          <p className="text-xs">{new Date(time).toDateString()}</p>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default PostComponent;
