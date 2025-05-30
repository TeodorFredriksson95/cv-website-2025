import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";

export default function WebPage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <section className="text-center pt-0  ">
          <div className="  bg-secondary-green shadow-lg/20  p-8 md:p-15 ">
            <h1 className="text-4xl sm:text-5xl font-semibold  text-secondary-cream leading-tight mb-3">
              Web <br className="block sm:hidden" />
              Development
            </h1>
            <div className="flex justify-center mb-4 border-b-3 border-b-accent-orange w-2/10 mx-auto"></div>
            <p className="text-lg w-full md:w-4/7 mx-auto text-white/80 font-semibold">
              From backend APIs to frontend polish — I love building systems
              that are efficient and feel easy to use
            </p>
          </div>
        </section>

        <Section>
          <div className="flex flex-col rounded lg:flex-row items-center gap-10">
            <div className="">
              <div className="border-b-2 mb-3">
                <div className="flex flex-row items-end md:justify-start gap-4">
                  <h2 className="text-4xl text-secondary-purple font-extrabold font-sans  leading-tight ">
                    Unidevweb
                  </h2>
                </div>
              </div>
              <p className=" font-semibold">
                A web based cover letter and resume with creative storytelling
                and a public but protected open REST API, serving relevant
                information about my technical skills and education.
              </p>
              <div className=" mt-4 rounded  ">
                <h2 className="text-2xl bg-accent-yellow p-2 font-mono font-bold ">
                  Focus areas:
                </h2>

                <div className="p-4 bg-secondary-brown inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc text-secondary-cream/80 px-5">
                    <li className="italic font-semibold">ASP.NET REST API</li>
                    <li className="italic font-semibold">
                      Modular architecture
                    </li>
                    <li className="italic ">
                      CI/CD pipelines with GitHub and Azure
                    </li>
                    <li className="italic ">Secure OAuth 2.0 authentication</li>
                    <li className="italic ">Layered authorization</li>
                    <li className="italic ">Microservices</li>
                  </ul>
                </div>
              </div>
                              <div className=" mt-4  border-2 rounded-md ">

                  <h2 className="text-2xl bg-secondary-green rounded-t text-secondary-cream p-2   ">
                Key features:
              </h2>
              <div className="p-4 bg-white rounded-md ">
                    <ul className="list-disc text-secondary-purple px-5">
                      <li className="italic font-semibold">Open REST API</li>
                  <li className="italic font-bold">API Documentation</li>
                  <li className="italic font-bold">
                    Authentication through known providers
                  </li>
                  <li className="italic font-bold">CSS animations</li>
                </ul>
              </div>
              </div>
                <div className="flex flex-wrap gap-4 border-b-5 border-accent-orange mt-4">

              <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/Logomark_Full Color.png"
                    alt="Firbase"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/react.png"
                    alt="React"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/ts-logo-128.png"
                    alt="TypeScript"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/GitHub_Logo.png"
                    alt="Github"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/csharpIcon.png"
                    alt="C#"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/Microsoft_Azure.svg"
                    alt="Azure"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                  <div className="w-20 h-20 p-2 flex items-center justify-center  rounded-md ">
                  <img
                    src="/logos/dotnet-logo.png"
                    alt="dotnet"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                </div>
              </div>
            </div>
            
            <div className="flex  flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4   rounded inset-shadow-sm inset-shadow-black/50">
                <div className="col-span-2 border-gray-500 border-2 rounded-md  overflow-hidden ">
                  <img
                    src="/showcase/unidevwebcover.png"
                    alt="Unidevweb Menu"
                    className="w-full h-auto    object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4    rounded ">
                <div className="border-gray-500 border-2 rounded-md aspect-[4/5]">
                  <img
                    src="/showcase/unidevwebmenu.png"
                    alt="Mobile view"
                    className="w-full h-full  inset-shadow-sm inset-shadow-black   object-cover"
                  />
                </div>

                <div className=" border-gray-500 border-2 rounded-md aspect-[4/5]">
                  <img
                    src="/showcase/unidevwebapi.png"
                    alt="API view"
                    className="w-full h-full  inset-shadow-sm inset-shadow-black   object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-primary/30">
          <div className="flex relative flex-col bg-cyan-50 shadow-sm p-4 rounded">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div className="max-w-xl flex-1 border-1 border-black/50 bg-cyan-300/60 shadow-lg/10 p-4 rounded">
                <div className="border-b-2 mb-3">
                  <h2 className="text-4xl font-extrabold font-sans text-slate-900 leading-tight">
                    Low-code Database
                  </h2>
                </div>

                <p className="text-md text-muted-foreground mb-4 font-mono font-semibold">
                  Built as part of my thesis, this low-code React app provides a
                  visual UI for managing relational databases — create, edit,
                  and visualize schema logic without writing SQL.
                </p>

                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Focus areas:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Write a research paper on usage, statistics, benefits, and
                      pitfalls of low-code apps
                    </li>
                    <li className="italic font-semibold">
                      Create and demo a low-code app using React, TypeScript and
                      SQL
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Key features:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      CRUD operations on relational databases
                    </li>
                    <li className="italic font-semibold">
                      Enables users without SQL knowledge to perform actions on
                      databases safely
                    </li>
                    <li className="italic font-semibold">Intuitive UI</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { src: "/logos/jsIconGreen.svg", alt: "Nodejs" },
                    {
                      src: "/logos/javascript-seeklogo.png",
                      alt: "Javascript",
                    },
                    { src: "/logos/react.png", alt: "React" },
                    { src: "/logos/ts-logo-128.png", alt: "TypeScript" },
                    { src: "/logos/GitHub_Logo.png", alt: "GitHub" },
                    { src: "/logos/MYSQL.png", alt: "MySQL" },
                    { src: "/logos/csslogo.png", alt: "CSS" },
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-lg shadow-md shadow-black/20"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                <div className="grid sm:grid-cols-2 gap-4 p-3 inset-ring-1 inset-ring-black/10 rounded inset-shadow-sm inset-shadow-black/50 bg-primary/10">
                  <div className="col-span-2 rounded border-2 border-gray-500 overflow-hidden">
                    <img
                      src="/showcase/image6.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 p-3 inset-ring-1 inset-ring-black/10 rounded inset-shadow-sm inset-shadow-black/50 bg-primary/10">
                  <div className="col-span-2 rounded border-1 border-black/20 overflow-hidden">
                    <img
                      src="/showcase/image10.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="">
          <div className="flex flex-col bg-blue-50 shadow-sm p-4 rounded gap-16">
            <div className="flex flex-col  lg:flex-row-reverse items-start gap-10">
              <div className="max-w-xl border-1 border-black/50 bg-blue-200/80 shadow-lg/10 p-4 rounded">
                <div className="border-b-2 mb-3 flex flex-row items-center justify-between">
                  <h2 className="text-4xl font-extrabold font-sans text-slate-900 leading-tight">
                    Campaign Site
                  </h2>
                </div>

                <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
                  Created as a custom template for a campaign presented at the
                  Swedish Parliament 2025, designed to follow up on issues of
                  homelessness and financial vulnerability.
                </p>
                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Focus areas:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Custom-made Wordpress template using PHP, HTML & CSS
                    </li>
                    <li className="italic font-semibold">
                      User-friendly interface for non-developers
                    </li>
                    <li className="italic font-semibold">
                      Thorough documentation
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Key features:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">News aggregator</li>
                    <li className="italic font-semibold">
                      Used as a campaign tool for a political hearing in Sweden
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { src: "/logos/jsIconGreen.svg", alt: "Nodejs" },
                    {
                      src: "/logos/javascript-seeklogo.png",
                      alt: "Javascript",
                    },
                    { src: "/logos/htmllogo.png", alt: "HTML" },
                    { src: "/logos/csslogo.png", alt: "CSS" },
                    { src: "/logos/PHP-logo.svg", alt: "PHP" },
                    { src: "/logos/wordpress.png", alt: "Wordpress" },
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-lg shadow-md shadow-black/20"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                <div className="grid sm:grid-cols-2 gap-4 p-3   rounded inset-shadow-sm inset-shadow-black/50 bg-blue-100">
                  <div className="col-span-2 rounded border-1 border-black/20 overflow-hidden">
                    <img
                      src="/showcase/socialtfrikort.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 p-3   rounded inset-shadow-sm inset-shadow-black/50 bg-blue-100">
                  <div className="col-span-2 rounded border-1 border-black/20 overflow-hidden">
                    <img
                      src="/showcase/socialtfrikort_2.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-primary text-background py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6">
              Got a website in mind?
            </h2>
            <p className="text-md sm:text-lg font-mono font-semibold mb-6">
              Whether you need a backend API, a clean frontend, or just a fresh
              perspective — feel free to get in touch.
            </p>
          </div>
        </Section>

        <Section className="">
          <div className="flex flex-col bg-blue-50 shadow-sm p-4 rounded gap-16">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-10">
              {/* Text Block */}
              <div className="max-w-xl border-1 border-black/50 bg-blue-200/80 shadow-lg/10 p-4 rounded">
                <div className="border-b-2 mb-3 flex flex-row items-center justify-between">
                  <h2 className="text-4xl font-extrabold font-sans text-slate-900 leading-tight">
                    E-commerce Storefront
                  </h2>
                </div>

                <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
                  A photo-oriented e-commerce site with a custom template built
                  from scratch for an association driving social policy changes.
                </p>

                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Focus areas:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Custom-made Wordpress template using PHP, HTML & CSS
                    </li>
                    <li className="italic font-semibold">
                      User-friendly interface for non-developers
                    </li>
                    <li className="italic font-semibold">
                      Thorough documentation
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  Key features:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Storefront for images suited for journalistic publications
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { src: "/logos/jsIconGreen.svg", alt: "Nodejs" },
                    {
                      src: "/logos/javascript-seeklogo.png",
                      alt: "Javascript",
                    },
                    { src: "/logos/htmllogo.png", alt: "HTML" },
                    { src: "/logos/csslogo.png", alt: "CSS" },
                    { src: "/logos/PHP-logo.svg", alt: "PHP" },
                    { src: "/logos/wordpress.png", alt: "Wordpress" },
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-lg shadow-md shadow-black/20"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Block */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="grid sm:grid-cols-2 gap-4 p-3 rounded inset-shadow-sm inset-shadow-black/50 bg-blue-100">
                  <div className="col-span-2 rounded border-1 border-black/20 overflow-hidden">
                    <img
                      src="/showcase/socialabildbyran.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 p-3 rounded inset-shadow-sm inset-shadow-black/50 bg-blue-100">
                  <div className="col-span-2 rounded border-1 border-black/20 overflow-hidden">
                    <img
                      src="/showcase/socialbildbyran_2.png"
                      alt="Create Database"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
