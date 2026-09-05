import { SKILLS } from "@/config/constants";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">Skills</h4>
      <ul className="flex flex-wrap gap-1.5">
        {SKILLS.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Badge variant="secondary">
              <Icon size={12} />
              <span className="text-xs font-medium ml-1">{name}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
