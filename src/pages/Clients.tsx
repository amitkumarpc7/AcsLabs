
import { useSEO } from "../hooks/useSeo";

export const Clients = () => {
  useSEO(
    "Our Clients",
    "Global leaders who trust ACSLabs for precision testing.",
  );

  const sectors = [
    {
      name: "Government Infrastructure",
      clients: [
        {
          name: "NHAI",
          logo: "https://via.placeholder.com/200x100?text=NHAI+Logo",
        },
        {
          name: "Indian Railways",
          logo: "https://via.placeholder.com/200x100?text=Railways+Logo",
        },
        {
          name: "PWD",
          logo: "https://via.placeholder.com/200x100?text=PWD+Logo",
        },
      ],
    },
    {
      name: "Private Construction",
      clients: [
        {
          name: "L&T",
          logo: "https://via.placeholder.com/200x100?text=L%26T+Logo",
        },
        {
          name: "Tata Projects",
          logo: "https://via.placeholder.com/200x100?text=Tata+Logo",
        },
        {
          name: "Reliance",
          logo: "https://via.placeholder.com/200x100?text=Reliance+Logo",
        },
      ],
    },
  ];

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display uppercase">
            Our <span className="text-industrial-primary">Clients</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Global leaders who trust ACSLabs for precision testing and
            manufacturing excellence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
          {sectors.map((sector) => (
            <div key={sector.name}>
              <h3 className="text-sm font-bold mb-8 text-slate-400 uppercase tracking-[0.3em] flex items-center gap-4">
                {sector.name}{" "}
                <span className="h-[1px] bg-slate-200 flex-1"></span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {sector.clients.map((client) => (
                  <div
                    key={client.name}
                    className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-center justify-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};
