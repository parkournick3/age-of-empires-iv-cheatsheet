"use client";

import { useState } from "react";
import UnitCard from "./_components/unit-card";
import UnitTable from "./_components/unit-table";
import { Unit } from "./data/units";

export default function Home() {
  const [selectedUnits, setSelectedUnits] = useState<Unit[]>([]);

  return (
    <div>
      <main className="space-y-20">
        <h1 className="text-center mt-16 text-4xl">
          Age of Empires IV Cheatsheet
          <br />
          <div className="badge badge-primary">beta</div>
        </h1>

        <UnitTable setSelectedUnits={setSelectedUnits} />

        <div className="flex gap-4 items-center justify-center">
          <UnitCard unit={selectedUnits[0]} />
          <UnitCard unit={selectedUnits[1]} />
        </div>
      </main>
    </div>
  );
}
