import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";

export default function WebPage() {
  return (
  
    <main className="flex flex-col py-20">

      <Section className="text-center max-w-3xl mb-20 mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight">Web <br className="block sm:hidden"/>Development</h1>
            <div className="flex justify-center">

            <FeatureIcon
              src="/icons/webdev2.svg"
              alt="Web Icon"
              label=""
              />
              </div>
        <p className="text-lg font-mono text-muted-foreground font-semibold">
          From backend APIs to frontend polish — my goal is to build systems that solves a problem and feel easy to use.
        </p>
      </Section>

<Section>
  <div className="flex flex-col lg:flex-row items-start gap-10">
    {/* LEFT SIDE — Text */}
    <div className="max-w-xl">
              <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
Unidevweb</h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
          A Story Driven API
        </h3>
      <p className="text-md text-muted-foreground mb-4 font-mono font-semibold">
        This was my first attempt at a CV website. The idea was to create a web based cover letter and resume through creative story-telling and a public but protected open REST API, serving relevant information about my technical skills.
      </p>
      <p className="text-md text-muted-foreground mb-2 font-semibold">Focus areas:</p>
        <ul className="list-disc list-inside text-md text-muted-foreground mb-5 space-y-1">
          <li>Modular architecture</li>
          <li>CI/CD pipelines with GitHub and Azure</li>
          <li>Secure OAuth 2.0 authentication</li>
          <li>Layered authorization</li>
          <li>Reusable and well-documented API design</li>
        </ul>


        <div className="flex flex-wrap justify-start text-background gap-4 text-sm font-mono">
          <span className="bg-accent px-4 py-2 font-semibold rounded-lg shadow-md shadow-black/20">ASP.NET</span>
          <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">PostgreSQL</span>
          <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Entity Framework</span>
          <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">OAuth 2.0</span>
          <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Azure</span>
          <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">CI/CD</span>
        </div>
    </div>
<div className="grid sm:grid-cols-2 gap-4">
  {/* Top wide image */}
  <div className="col-span-2 border-4 border-gray-300 shadow-2xl/40 overflow-hidden ">
    <img
      src="/showcase/unidevwebcover.png"
      alt="Unidevweb Menu"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Bottom left image */}
  <div className="border-4 shadow-2xl/40 aspect-[4/5]">
    <img
      src="/showcase/unidevwebmenu.png"
      alt="Mobile view"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Bottom right image */}
  <div className="border-4 shadow-2xl/40  aspect-[4/5]">
    <img
      src="/showcase/unidevwebapi.png"
      alt="API view"
      className="w-full h-full object-cover"
    />
  </div>
</div>
  </div>
</Section>

<Section>
  <div className="flex flex-col gap-16">

    {/* Project 1 — E-commerce */}
    <div className="flex flex-col lg:flex-row items-start gap-10">
      <div className="max-w-xl">
            <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
            E-commerce Storefront
            </h2>
        <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
          A modern WordPress site built from scratch for a furniture company. Fully responsive, with custom WooCommerce integration and styled components tailored to match their branding.
        </p>
        <div className="flex flex-wrap gap-2 text-sm font-mono text-background">
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WordPress</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">PHP</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WooCommerce</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">Custom Theme</span>
        </div>
      </div>

      <div className="w-full  p-1 shadow-2xl/40 aspect-[7/3]">
        <img
          src="/showcase/socialtfrikort.png"
          alt="E-commerce site"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Project 2 — Campaign Site */}
    <div className="flex flex-col lg:flex-row items-start gap-10">
      <div className="max-w-xl">
                <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
Campaign Microsite</h2>
        <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
          A minimalistic WordPress microsite designed for a short-term campaign. Built with performance in mind — lightweight custom theme, no bloat, just purpose.
        </p>
        <div className="flex flex-wrap gap-2 text-sm font-mono text-background">
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WordPress</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">PHP</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">Custom Template</span>
        </div>
      </div>

      <div className="w-full border-4 border-[#d5e9e6] overflow-hidden shadow-2xl/40  aspect-[7/3]">
        <img
          src="/showcase/socialabildbyran.png"
          alt="Campaign site"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</Section>


<Section>
  <div className="flex flex-col lg:flex-row items-start gap-10">
    
    {/* LEFT — Description */}
    <div className="max-w-xl">
      <h2 className="text-3xl  font-extrabold font-sans text-accent leading-tight">Lowcode Project</h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
        A Thesis On the Usage of Lowcode
      </h3>
      <p className="text-md text-muted-foreground mb-4 font-mono font-semibold">
        Built as part of my thesis, this lowcode React app provides a visual UI for managing relational databases — create, edit, and visualize schema logic without writing SQL.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        Despite being very basic in it's graphic design, or perhaps partially because of it, this program was highly effective when it came to quickly creating, editing and managing databases in MySQL. The project won the Newton School of Applied Sciences' award for best thesis project 2023. 
      </p>
      <p className="text-md font-mono font-semibold mb-4">
        Download thesis (SE)
      </p>
      <div className="flex flex-wrap gap-3 text-sm font-mono text-background mt-4">
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">React</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">TypeScript</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Node.js</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">MySQL</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Figma</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Lucidchart</span>
      </div>
    </div>

    {/* RIGHT — Screenshot Grid */}
    <div className="grid grid-cols-2 gap-4 w-full  ">
      <img src="/showcase/image10.png" alt="Create Database" className="shadow-2xl/40 object-cover col-span-2" />
      <img src="/showcase/image6.png" alt="Create Database" className="shadow-2xl/40 object-cover col-span-2" />
    </div>

  </div>
</Section>


    </main>
  );
}
