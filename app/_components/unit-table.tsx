import { Dispatch, SetStateAction } from "react";
import { Unit, units } from "../data/units";

export default function UnitTable({
  setSelectedUnits,
}: {
  setSelectedUnits: Dispatch<SetStateAction<Unit[]>>;
}) {
  // const handleMouseOver = (event) => {
  //   // pintar todas as células da linha e da coluna
  // };

  return (
    <table className="w-full table">
      <thead>
        <th></th>
        {units.map((unit) => (
          <th key={unit.name + "th"}>{unit.name}</th>
        ))}
      </thead>
      <tbody>
        {units.map((unit) => (
          <tr key={unit.name + "td"}>
            <td>{unit.name}</td>
            {units.map((otherUnit) => (
              <td
                onClick={() => setSelectedUnits([otherUnit, unit])}
                key={otherUnit.name + "other-unit"}
              >
                {unit.veryWeakAgainst.includes(otherUnit.name) ? "🔴" : ""}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                {unit.weakAgainst.includes(otherUnit.name) ? "🟠" : ""}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                {unit.strongAgainst.includes(otherUnit.name) ? "🟢" : ""}
                {unit.veryStrongAgainst.includes(otherUnit.name) ? "🟣" : ""}
                {!unit.veryStrongAgainst.includes(otherUnit.name) &&
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                /* @ts-expect-error */
                !unit.strongAgainst.includes(otherUnit.name) &&
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                /* @ts-expect-error */
                !unit.weakAgainst.includes(otherUnit.name) &&
                !unit.veryWeakAgainst.includes(otherUnit.name)
                  ? "⚪"
                  : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
