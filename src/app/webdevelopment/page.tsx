import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";

export default function WebPage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <section className="text-center pt-0  ">
          <div className="  bg-secondary-green shadow-lg/20  p-8 md:p-15 ">
            <h1 className="text-4xl sm:text-5xl font-semibold text-shadow-lg text-secondary-cream leading-tight mb-3">
              Web <br className="block sm:hidden" />
              Development
            </h1>
            <div className="flex justify-center mb-4 border-b-3 border-b-accent-orange w-2/10 mx-auto"></div>
            <p className="text-lg w-full md:w-4/7 mx-auto text-secondary-cream font-semibold">
              From backend APIs to frontend polish — I love building systems
              that are efficient and feel easy to use
            </p>
          </div>
        </section>

        <Section>
          <div className="flex flex-col-reverse rounded lg:flex-row items-center gap-10">
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
                  <ul className="list-disc text-secondary-cream px-5">
                    <li className="italic ">ASP.NET REST API</li>
                    <li className="italic ">
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

              <div className="bg-secondary-brown mt-4 rounded shadow-lg/20 border-2">
                <p className="text-2xl p-2 font-bold bg-secondary-green text-secondary-cream  ">
                  Key features:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">Open REST API</li>
                    <li className="italic font-semibold">API Documentation</li>
                    <li className="italic font-semibold">
                      Authentication through known providers
                    </li>
                    <li className="italic font-semibold">CSS animations</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4  mt-4">
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-14 h-14 p-2 flex items-center shadow-md shadow-black/20 justify-center  rounded-md ">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firbase"
                      className="max-w-full max-h-full object-contain "
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/GitHub_Logo.png"
                      alt="Github"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/csharpIcon.png"
                      alt="C#"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/Microsoft_Azure.svg"
                      alt="Azure"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/dotnet-logo.png"
                      alt="dotnet"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="border-b-4 border-accent-orange mt-4"></div>
            </div>

            <div className="flex  flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4 bg-black/10 p-1  rounded inset-shadow-sm/50 inset-shadow-black/50">
                <div className="col-span-2 border-gray-500 border-2 rounded-md  overflow-hidden ">
                  <img
                    src="/showcase/unidevwebcover.png"
                    alt="Unidevweb Menu"
                    className="w-full h-auto    object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4    rounded ">
                <div className="border-gray-500 rounded-md aspect-[4/5]">
                  <img
                    src="/showcase/unidevwebmenu.png"
                    alt="Mobile view"
                    className="w-full h-full  bg-black/10 p-1  rounded-lg inset-shadow-sm/50 inset-shadow-black/50   object-cover"
                  />
                </div>

                <div className=" border-gray-500  rounded-md aspect-[4/5]">
                  <img
                    src="/showcase/unidevwebapi.png"
                    alt="API view"
                    className="w-full h-full   bg-black/10 p-1   rounded-lg inset-shadow-sm/50 inset-shadow-black/50   object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary-green ">
          <div className="container mx-auto  flex  sm:flex-col-reverse flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
            <div className="  text-left lg:flex-1">
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded  h-auto object-cover"
                  src="/showcase/image6.png"
                  alt="Character model from the  left side"
                />
              </div>
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded  h-auto object-cover"
                  src="/showcase/image10.png"
                  alt="Character model from the left side"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-left  border-black/50 space-y-6   rounded">
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <div className="p-2">
                  <div className="border-b-2 mb-3">
                    <h2 className="text-4xl  font-extrabold font-sans text-secondary-cream/90 leading-tight">
                      Low-code Database
                    </h2>
                  </div>

                  <p className="text-md  text-secondary-cream/90 font-mono  mb-4">
                    Built as part of my thesis, this low-code React app provides
                    a visual UI for managing relational databases — create,
                    edit, and visualize schema logic without writing SQL.
                  </p>
                </div>

                <p className="text-2xl p-2 font-bold bg-accent-orange  ">
                  Focus areas:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Write a research paper on usage, statistics, benefits, and
                      pitfalls of low-code apps{" "}
                    </li>
                    <li className="italic font-semibold">
                      Create and demo a low-code app using React, TypeScript and
                      SQL{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <p className="text-2xl p-2 font-bold bg-secondary-purple text-secondary-cream  ">
                  Key features:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      CRUD operations on relational databases
                    </li>
                    <li className="italic font-semibold">
                      Enables users without SQL knowledge to perform actions on
                      databases safely
                    </li>
                    <li className="italic font-semibold">Intuitive UI </li>
                  </ul>
                </div>
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
                    className="w-14 h-14 p-2 shadow-md shadow-black/20 flex bg-white items-center justify-center  rounded-md"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="border-b-4 border-accent-orange mt-2"></div>
            </div>
          </div>
        </Section>

        <Section className="">
          <div className="container mx-auto  flex  sm:flex-col-reverse flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
            <div className="  text-left lg:flex-1">
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t  h-auto object-cover"
                  src="/showcase/socialtfrikort.png"
                  alt="Character model from the left side"
                />
              </div>
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t  h-auto object-cover"
                  src="/showcase/socialtfrikort_2.png"
                  alt="Character model from the left side"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-left  border-black/50 space-y-6   rounded">
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <div className="p-2">
                  <div className="border-b-2 mb-3">
                    <h2 className="text-4xl  font-extrabold font-sans text-secondary-cream/90 leading-tight">
                      Campaign Site
                    </h2>
                  </div>

                  <p className="text-md  text-secondary-cream/90 font-mono  mb-4">
                    Created as a custom template for a campaign presented at the
                    Swedish Parliament 2025, designed to follow up on issues of
                    homelessness and financial vulnerability.
                  </p>
                </div>

                <p className="text-2xl p-2 font-bold bg-accent-orange  ">
                  Focus areas:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
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
              </div>
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <p className="text-2xl p-2 font-bold bg-secondary-green text-secondary-cream  ">
                  Key features:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">News aggregation</li>
                    <li className="italic font-semibold">
                      Used as a campaign tool for a political hearing in Sweden
                    </li>
                  </ul>
                </div>
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
                    className="w-14 h-14  p-2 flex items-center justify-center bg-background rounded-lg shadow-md shadow-black/20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="border-b-4 border-accent-orange mt-2"></div>
            </div>
          </div>
        </Section>

        <Section className="bg-secondary-green  py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-secondary-cream sm:text-5xl font-extrabold mb-6">
              Got a website in mind?
            </h2>
            <p className="text-md sm:text-lg text-secondary-cream font-semibold mb-6">
              Whether you need a backend API, a clean frontend, or just a fresh
              perspective — feel free to get in touch.
            </p>
          </div>
        </Section>

        <Section className="">
          <div className="container mx-auto  flex  sm:flex-col-reverse flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
            <div className="  text-left lg:flex-1">
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t  h-auto object-cover"
                  src="/showcase/socialtfrikort.png"
                  alt="Character model from the left side"
                />
              </div>
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t  h-auto object-cover"
                  src="/showcase/socialtfrikort_2.png"
                  alt="Character model from the left side"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-left  border-black/50 space-y-6   rounded">
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <div className="p-2">
                  <div className="border-b-2 mb-3">
                    <h2 className="text-4xl  font-extrabold font-sans text-secondary-cream/90 leading-tight">
                      E-commerce Storefront
                    </h2>
                  </div>

                  <p className="text-md  text-secondary-cream/90 font-mono  mb-4">
                    A photo-oriented e-commerce site with a custom template
                    built from scratch for an association driving social policy
                    changes.
                  </p>
                </div>

                <p className="text-2xl p-2 font-bold bg-accent-orange  ">
                  Focus areas:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
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
              </div>
              <div className="bg-secondary-brown rounded shadow-lg/20 border-2">
                <p className="text-2xl p-2 font-bold bg-secondary-green text-secondary-cream  ">
                  Key features:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">News aggregation</li>
                    <li className="italic font-semibold">
                      Storefront for images suited for journalistic publications
                    </li>
                  </ul>
                </div>
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
                    className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-lg shadow-md shadow-black/20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="border-b-4 border-accent-orange mt-2"></div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
