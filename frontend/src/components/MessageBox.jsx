/* eslint-disable react/prop-types */
function MessageBox({ avatar, text, author }) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <img
          src={`../src/resources/characters/${avatar}.png`}
          className=" h-10 w-10"
        />
        <p>{author}</p>
      </div>
      <p className="border-2 rounded-lg p-2 sm:text-lg text-xs">{text}</p>
    </div>
  );
}

export default MessageBox;
