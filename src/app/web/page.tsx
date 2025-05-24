import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";

export default function WebPage() {
  return (
  
    <div className="grid grid-rows-[20px_1fr]  justify-items-center min-h-screen sm:mt-16">

<main className="flex flex-col  row-start-2 w-full">

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
          A Story-Driven API
        </h3>
      <p className="text-md text-muted-foreground mb-4 font-mono font-semibold">
        The idea was to create a web based cover letter and resume through creative story-telling and a public but protected open REST API, serving relevant information about my technical skills.
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
  <div className="col-span-2  shadow-2xl/40 overflow-hidden ">
    <img
      src="/showcase/unidevwebcover.png"
      alt="Unidevweb Menu"
      className="w-full h-auto rounded object-cover"
    />
  </div>

  {/* Bottom left image */}
  <div className=" shadow-2xl/40 aspect-[4/5]">
    <img
      src="/showcase/unidevwebmenu.png"
      alt="Mobile view"
      className="w-full h-full rounded object-cover"
    />
  </div>

  {/* Bottom right image */}
  <div className="shadow-2xl/40  aspect-[4/5]">
    <img
      src="/showcase/unidevwebapi.png"
      alt="API view"
      className="w-full rounded h-full object-cover"
    />
  </div>
</div>
  </div>
</Section>


<Section>
  <div className="flex flex-col lg:flex-row items-start gap-10">
    
    {/* LEFT — Description */}
    <div className="max-w-xl">
      <h2 className="text-3xl  font-extrabold font-sans text-accent mb-2 leading-tight">Low-code Project</h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
        A Thesis on the Usage of Low-code
      </h3>
      
      <p className="text-md text-muted-foreground mb-4 font-mono font-semibold">
        Built as part of my thesis, this low-code React app provides a visual UI for managing relational databases — create, edit, and visualize schema logic without writing SQL.
      </p>
        <p className="text-md text-muted-foreground mb-2 font-semibold">Focus areas:</p>
          <ul className="list-disc list-inside text-md text-muted-foreground mb-5 space-y-1">
          <li>External database management without coding experience</li>
          <li>Self-explanatory UI</li>
          <li>Theoretical deep dive and presentation of low-code concepts</li>
        </ul>

           
           <div className="mt-4 p-4 border-l-4 border-primary bg-primary/10 rounded shadow-md">
            <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                  </div>
  <p className="text-sm leading-relaxed text-primary-foreground">
    <span className="text-primary text-lg font-semibold">Best Thesis Award:</span> The project was awarded top honors and voted <span className="font-semibold text-lg italic">"Best thesis project 2023"</span> at Newton School of Applied Sciences.
  </p>
  <a className='hover:underline decoration-primary' href='https://www.kth.se/profile/subasic' target='_blank' rel="noopener noreferrer">

  </a>
</div>

      <div className="flex flex-wrap gap-3 text-sm font-mono text-background mt-4">
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">React</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">TypeScript</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">NodeJS</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">MySQL</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Figma</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Lucidchart</span>
      </div>
    </div>

    {/* RIGHT — Screenshot Grid */}
    <div className="grid grid-cols-2 gap-4 w-full  ">
      <img src="/showcase/image10.png" alt="Create Database" className="shadow-2xl/40 rounded object-cover col-span-2" />
      <img src="/showcase/image6.png" alt="Create Database" className="shadow-2xl/40 rounded object-cover col-span-2" />
    </div>

  </div>
</Section>



<Section>
  <div className="flex flex-col gap-16">

    {/* Project 1 — E-commerce */}
    <div className="flex flex-col lg:flex-row items-start gap-10">
       <div className="max-w-xl">
                <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
                    Campaign Site
                </h2>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
        A Hub for Information
      </h3>
        <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
Created as a custom template for a campaign presented at the Swedish Parliament, designed to follow up on issues of homelessness and financial vulnerability. User-friendly for non-developers and fully documented for future updates.        </p>
                 <p className="text-md text-muted-foreground mb-2 font-semibold">Focus areas:</p>

            <ul className="list-disc list-inside text-md text-muted-foreground mb-5 space-y-1">
          <li>Custom template</li>
          <li>User-friendly interface for non-developers</li>
          <li>Thorough documentation</li>
        </ul>
        <div className="flex flex-wrap gap-2 text-sm font-mono text-background">
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WordPress</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">PHP</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">Custom Template</span>
        </div>
      </div>

      <div className="w-full shadow-2xl/40 aspect-[7/3]">
        <img
          src="/showcase/socialtfrikort.png"
          alt="E-commerce site"
          className="w-full rounded h-full object-cover"
        />
      </div>
    </div>

    {/* Project 2 — Campaign Site */}
    <div className="flex flex-col  lg:flex-row items-start gap-10">
           <div className="max-w-xl">
            <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
            E-commerce Storefront
            </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
        Empowering the Financially Marginalized
      </h3>
        <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
          A photo-oriented e-commerce site with a custom template built from scratch for an association driving social policy changes.
        </p>
              <p className="text-md text-muted-foreground mb-2 font-semibold">Focus areas:</p>
          <ul className="list-disc list-inside text-md text-muted-foreground mb-5 space-y-1">
          <li>Accessible admin panel</li>
          <li>Easy to use without prior web development experience</li>
          <li>Thorough documentation</li>
          <li>Seamless shopping experience</li>
        </ul>
        <div className="flex  flex-wrap gap-2 text-sm font-mono text-background">
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WordPress</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">PHP</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">WooCommerce</span>
          <span className="bg-primary px-4 py-2 font-semibold rounded shadow-md shadow-black/20">Custom Template</span>
        </div>
      </div>


      <div className="w-full overflow-hidden shadow-2xl/40  aspect-[7/3]">
        <img
          src="/showcase/socialabildbyran.png"
          alt="Campaign site"
          className="w-full h-full rounded object-cover"
        />
      </div>
    </div>

  </div>
</Section>



<Section className="bg-primary text-background py-20">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6">
      Building something?
    </h2>
    <p className="text-md sm:text-lg font-mono font-semibold mb-6">
      Whether you need a backend API, a snappy frontend, or just a fresh perspective — I’d love to hear what you're working on.
    </p>
    <p className="text-md sm:text-lg font-mono mb-8">
      Let’s connect and turn your idea into something real.
    </p>
    <a
      href="mailto:teofredev@gmail.com"
      className="inline-block px-6 py-3 border border-background text-background font-mono font-semibold rounded hover:bg-background hover:text-primary transition"
    >
      Reach Out
    </a>
  </div>
</Section>


    </main>
    </div>
  );
}
