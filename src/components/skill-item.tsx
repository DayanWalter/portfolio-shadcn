export default function SkillItem({ skill }) {
  return (
    <>
      <a
        className="flex flex-col items-center gap-2  hover:cursor-pointer"
        href={skill.website}
        target="_blank"
        aria-label={"Link to " + skill.name + " docs"}
      >
        <img
          className="h-10 w-10 hover:scale-110"
          src={skill.svg}
          alt={skill.name + " image"}
        />
        <span className="">{skill.name}</span>
      </a>
    </>
  );
}
