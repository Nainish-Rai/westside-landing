import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    heading: "Next-Gen Ground Station",
    subheading: "Satellite Communications",
    description:
      "A state-of-the-art ground station enabling seamless satellite data downlink and uplink, featuring automated tracking, high-throughput connectivity, and robust reliability for mission-critical operations.",
    image:
      "https://cdn.cosmos.so/d33ccd12-48ec-47f7-bd5e-bd497a5f5fb1?format=jpeg",
    url: "#",
  },
  {
    heading: "Mission Control Suite",
    subheading: "Operations Platform",
    description:
      "A unified platform for real-time satellite fleet management, telemetry visualization, and command execution, designed to streamline ground segment operations for commercial and scientific missions.",
    image:
      "https://cdn.cosmos.so/d828d816-1d9b-4816-9353-7a58fcfde3a9?format=jpeg",
    url: "#",
  },
  {
    heading: "Rapid Deployment Antenna Array",
    subheading: "Infrastructure Innovation",
    description:
      "Modular, portable antenna systems engineered for quick setup in remote locations, supporting disaster response, field research, and temporary mission requirements with minimal footprint.",
    image:
      "https://cdn.cosmos.so/70637007-22b1-4ad4-8076-e085f761c943?format=jpeg",
    url: "#",
  },
  {
    heading: "Secure Data Relay Hub",
    subheading: "Network Security",
    description:
      "A secure, high-availability relay hub for encrypted satellite data transfer, ensuring data integrity and privacy from ground to cloud, tailored for government and enterprise clients.",
    image:
      "https://cdn.cosmos.so/ee6edeb0-9a64-4452-9a47-5cfa02039ab7?format=jpeg",
    url: "#",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-32  backdrop-blur-3xl">
      <div className="container">
        <div className="w-full lg:px-16 mx-auto">
          <p className="text-muted-foreground mb-1 uppercase md:text-lg">
            Powering the Future of Space Infrastructure
          </p>
          <h1 className="text-3xl font-bold uppercase md:text-7xl">Projects</h1>
          <p className="text-muted-foreground mt-7 max-w-2xl">
            Explore how West Side is redefining the ground segment for the new
            space age. Our portfolio showcases advanced solutions for satellite
            communications, mission operations, and secure data transfer—
            empowering organizations to connect, control, and innovate beyond
            Earth.
          </p>
          <Button className="mt-7 border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-none px">
            View All Projects
            <ArrowDownRight className="size-4" />
          </Button>
        </div>
        <div className="mt-24 flex flex-col gap-5 md:mt-36">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              className="group relative isolate min-h-72 bg-cover bg-center px-5 py-14 lg:px-12 border border-x-0 lg:py-24"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="relative z-10 flex flex-col gap-7 text-white/80 transition-colors duration-300 ease-out group-hover:text-white lg:flex-row">
                <div className="flex gap-1 text-2xl font-bold">
                  <span>/</span>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5">
                  <h3 className="text-2xl font-bold lg:text-4xl">
                    {project.heading}
                  </h3>
                  <p className="text-sm font-medium uppercase">
                    {project.subheading}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <p>{project.description}</p>
                    <div className="mt-2.5 h-0 transition-all duration-300 ease-out group-hover:h-10">
                      <div>
                        <Button className="rounded-none bg-transparent text-white border mt-4 w-fit opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100">
                          View project
                          <ArrowUpRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-xs absolute inset-0 z-0 bg-black/80 transition-all duration-300 ease-out group-hover:bg-black/50 group-hover:backdrop-blur-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectSection };
