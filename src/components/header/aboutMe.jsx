import { Triangle } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div>
        <img src="me.png" alt="" className="max-w-7.5 rounded-sm" />
      </div>
      <Triangle width={9} fill="white" className="rotate-180" strokeWidth={0} />
    </div>
  );
};

export default AboutMe;
