"use client";

import { useMemo, useState } from "react";

type VacationRequest = {
  mitarbeiter: string;
  zeitraum: string;
  status: "ausstehend" | "genehmigt" | "abgelehnt";
};

const vacationRequests: VacationRequest[] = [
  {
    mitarbeiter: "Anna Keller",
    zeitraum: "03.06.2026 - 14.06.2026",
    status: "genehmigt",
  },
  {
    mitarbeiter: "Markus Weber",
    zeitraum: "22.06.2026 - 28.06.2026",
    status: "ausstehend",
  },
  {
    mitarbeiter: "Sofia Neumann",
    zeitraum: "06.07.2026 - 17.07.2026",
    status: "abgelehnt",
  },
  {
    mitarbeiter: "Jonas Richter",
    zeitraum: "10.08.2026 - 21.08.2026",
    status: "ausstehend",
  },
];

const statusStyles: Record<VacationRequest["status"], string> = {
  ausstehend: "bg-amber-50 text-amber-700 ring-amber-200",
  genehmigt: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  abgelehnt: "bg-rose-50 text-rose-700 ring-rose-200",
};

const statusLabels: Record<VacationRequest["status"], string> = {
  ausstehend: "Ausstehend",
  genehmigt: "Genehmigt",
  abgelehnt: "Abgelehnt",
};

const filterOptions = [
  { label: "Alle", value: "alle" },
  { label: "Ausstehend", value: "ausstehend" },
  { label: "Genehmigt", value: "genehmigt" },
  { label: "Abgelehnt", value: "abgelehnt" },
] as const;

type FilterValue = (typeof filterOptions)[number]["value"];

export default function UrlaubsantraegePage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("alle");

  const counts = useMemo(
    () => ({
      total: vacationRequests.length,
      ausstehend: vacationRequests.filter(
        (request) => request.status === "ausstehend",
      ).length,
      genehmigt: vacationRequests.filter(
        (request) => request.status === "genehmigt",
      ).length,
      abgelehnt: vacationRequests.filter(
        (request) => request.status === "abgelehnt",
      ).length,
    }),
    [],
  );

  const filteredRequests =
    activeFilter === "alle"
      ? vacationRequests
      : vacationRequests.filter((request) => request.status === activeFilter);

  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              Urlaubsanträge
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Übersicht der aktuellen Urlaubsanträge mit Zeitraum und
              Bearbeitungsstatus.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Neuer Antrag
          </button>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Gesamt</p>
            <p className="mt-2 text-3xl font-semibold">{counts.total}</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-medium text-amber-700">Ausstehend</p>
            <p className="mt-2 text-3xl font-semibold text-amber-900">
              {counts.ausstehend}
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-medium text-emerald-700">Genehmigt</p>
            <p className="mt-2 text-3xl font-semibold text-emerald-900">
              {counts.genehmigt}
            </p>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
            <p className="text-sm font-medium text-rose-700">Abgelehnt</p>
            <p className="mt-2 text-3xl font-semibold text-rose-900">
              {counts.abgelehnt}
            </p>
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-md px-3 py-2 text-sm font-medium ring-1 ring-inset transition ${
                  isActive
                    ? "bg-slate-950 text-white ring-slate-950"
                    : "bg-white text-slate-600 ring-slate-200 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-4 border-b border-slate-200 bg-slate-100 px-5 py-3 text-sm font-medium uppercase text-slate-500 sm:grid-cols-[1.2fr_1fr_auto]">
            <span>Mitarbeiter</span>
            <span>Zeitraum</span>
            <span>Status</span>
          </div>

          <ul className="divide-y divide-slate-200">
            {filteredRequests.map((request) => (
              <li
                key={`${request.mitarbeiter}-${request.zeitraum}`}
                className="grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center"
              >
                <div className="font-medium text-slate-950">
                  {request.mitarbeiter}
                </div>
                <div className="text-sm text-slate-600">{request.zeitraum}</div>
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${statusStyles[request.status]}`}
                  >
                    {statusLabels[request.status]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
