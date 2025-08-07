import characters from "../utils/variables";
import UseMyContext from "../hooks/useMyContext";

function Characters() {
  const { userData, changeUserData } = UseMyContext();
  const handleSelect = (selectedCharacter) => {
    changeUserData("character", selectedCharacter);
  };

  return (
    <div className="flex gap-4">
      {characters.map((c) => {
        return (
          <div
            key={c.id}
            onClick={() => {
              handleSelect(c.character);
            }}
            className="cursor-pointer flex flex-col gap-2"
          >
            <div
              className={`md:h-12 md:w-12 w-8 h-8 ${
                c.character === userData.character
                  ? "bg-black dark:bg-white"
                  : "border-none"
              }`}
            >
              <img
                src={`/resources/characters/${c.character}.png`}
                className="h-full w-full"
              />
            </div>
            <p className="font-inter text-xs 2xl:text-lg">{c.character}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
