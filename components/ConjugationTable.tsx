import type { Conjugation } from "@/lib/getVerb";

const SUBJECTS = ["yo", "tú", "él/ella", "nosotros", "vosotros", "ellos/ellas"] as const;

type ConjugationTableProps = {
  tense: string;
  data: Conjugation;
};

export default function ConjugationTable({ tense, data }: ConjugationTableProps) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-accent-light">
            <th className="px-4 py-2.5 text-left font-ui font-medium text-accent text-xs uppercase tracking-wide">
              {tense}
            </th>
            <th className="px-4 py-2.5 text-left font-ui font-medium text-accent text-xs uppercase tracking-wide">
              Conjugation
            </th>
          </tr>
        </thead>
        <tbody>
          {SUBJECTS.map((subject, i) => (
            <tr
              key={subject}
              className={i % 2 === 0 ? "bg-base" : "bg-surface"}
            >
              <td className="px-4 py-2.5 font-ui text-muted">{subject}</td>
              <td className="px-4 py-2.5 font-body text-text" lang="es">
                {data[subject]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
