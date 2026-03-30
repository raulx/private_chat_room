const MessageBox: React.FC<{
  avatar: string;
  text: string;
  author: string;
}> = ({ avatar, text, author }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col overflow-hidden">
        <img
          src={`/resources/characters/${avatar}.png`}
          className="h-10 w-10"
        />
        <p className="text-xs">{author}</p>
      </div>
      <p className="border-2 rounded-lg p-2 sm:text-lg text-xs">{text}</p>
    </div>
  );
};

export default MessageBox;
