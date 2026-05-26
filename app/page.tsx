import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Urlaubsanträge",
      description: "Anträge übersichtlich erfassen, prüfen und nachverfolgen.",
      href: "/urlaubsantraege",
    },
    {
      title: "Mitarbeiter",
      description: "Teamdaten und Abwesenheiten zentral im Blick behalten.",
      href: "#",
    },
    {
      title: "Genehmigungen",
      description: "Entscheidungen schnell treffen und transparent dokumentieren.",
      href: "#",
    },
  ];

  return (
    <main className="bg-slate-50 px-6 py-16 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-teal-700">
            Digitale Abwesenheitsverwaltung
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            urlaubsverwaltung
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Eine einfache Lösung, um Urlaubstage, Mitarbeiter und Freigaben
            professionell zu verwalten.
          </p>
          <div className="mt-8">
            <Link
              href="/urlaubsantraege"
              className="inline-flex rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Urlaubsanträge ansehen
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
