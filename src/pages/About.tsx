import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSeo";
import { Award, Target, Globe, ChevronRight } from "lucide-react";

export const About = () => {
  useSEO(
    "About Us",
    "Learn about our heritage, mission, and commitment to precision in material testing.",
  );

  const stats = [
    { label: "Years Experience", value: "25+", path: null },
    { label: "Instruments Sold", value: "10,000+", path: "/catalog" },
    { label: "Global Clients", value: "500+", path: "/clients" },
    { label: "Certifications", value: "12", path: "/certifications" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-industrial-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center pt-10">
          <h1 className="text-5xl font-bold font-display uppercase tracking-tight">
            Our <span className="text-industrial-primary">Story</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering excellence and precision since 2001. We provide the
            tools that build the world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-industrial-primary"></span>
                  Who We Are
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Founded in the heart of the industrial zone, our company
                    started with a simple mission: to provide material testing
                    labs with instruments that never compromise on accuracy.
                  </p>
                  <p>
                    Today, we are a leading manufacturer of civil engineering
                    and laboratory testing equipment. Our products are used in
                    mega-projects across the globe, from high-rise skyscrapers
                    to critical infrastructure bridges.
                  </p>
                </div>
              </div>

              {/* STATS GRID WITH REDIRECTION */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat, i) => {
                  const content = (
                    <div className="h-full border-l-4 border-industrial-primary pl-4 py-2 transition-all duration-300 hover:bg-slate-50 hover:translate-x-1 group">
                      <div className="text-3xl font-bold text-industrial-dark flex items-center gap-2">
                        {stat.value}
                        {stat.path && (
                          <ChevronRight
                            size={18}
                            className="text-industrial-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                      <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  );

                  return stat.path ? (
                    <Link key={i} to={stat.path} className="block">
                      {content}
                    </Link>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Factory Floor"
                className="rounded-[2.5rem] shadow-2xl border border-slate-100"
              />
              <div className="absolute -bottom-6 -left-6 bg-industrial-primary text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                <p className="text-xl font-bold italic leading-tight">
                  "Accuracy is not an option,
                  <br />
                  it's our standard."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-industrial-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-industrial-primary" />,
                title: "Precision",
                desc: "Every micron matters. Our sensors are calibrated to the highest global standards.",
              },
              {
                icon: <Award className="text-industrial-primary" />,
                title: "Quality",
                desc: "We use high-grade steel and German-engineered components for long-lasting durability.",
              },
              {
                icon: <Globe className="text-industrial-primary" />,
                title: "Support",
                desc: "Global installation and 24/7 technical support for every client worldwide.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-industrial-primary/10 transition-colors">
                  {React.cloneElement(value.icon, { size: 40 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
