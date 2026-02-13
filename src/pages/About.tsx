import React from "react";
import { useSEO } from "../hooks/useSeo";
import { Award, Target, CheckCircle, Globe } from "lucide-react";

export const About = () => {
  useSEO(
    "About Us",
    "Learn about our heritage, mission, and commitment to precision in material testing.",
  );

  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Instruments Sold", value: "10,000+" },
    { label: "Global Clients", value: "500+" },
    { label: "Certifications", value: "12" },
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
                  Today, we are a leading manufacturer of civil engineering and
                  laboratory testing equipment. Our products are used in
                  mega-projects across the globe, from high-rise skyscrapers to
                  critical infrastructure bridges.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-industrial-primary pl-4"
                  >
                    <div className="text-3xl font-bold text-industrial-dark">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 uppercase font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Factory Floor"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-industrial-primary text-white p-8 rounded-xl hidden lg:block">
                <p className="text-xl font-bold italic">
                  "Accuracy is not an option, it's our standard."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-16">
            Our Core Values
          </h2>
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
                desc: "Global installation and 24/7 technical support for every client.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <div className="mb-6">
                  {React.cloneElement(value.icon, { size: 40 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
