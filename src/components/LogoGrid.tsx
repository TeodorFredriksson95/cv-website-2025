const logos = [
  { src: "/logos/jsIconGreen.svg", alt: "Nodejs" },
  { src: "/logos/javascript-seeklogo.png", alt: "Javascript" },
  { src: "/logos/blender_icon_64x64.png", alt: "Blender" },
  { src: "/logos/Logomark_Full Color.png", alt: "Firebase" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/UE-Icon-2023-Black.png", alt: "Unreal Engine 5" },
  { src: "/logos/ts-logo-128.png", alt: "TypeScript" },
  { src: "/logos/GitHub_Logo.png", alt: "Github" },
  { src: "/logos/csharpIcon.png", alt: "C#" },
  { src: "/logos/godot-seeklogo.png", alt: "Godot" },
  { src: "/logos/trello-icon-gradient-blue@2x.png", alt: "Trello" },
  { src: "/logos/MYSQL.png", alt: "MySQL" },
  { src: "/logos/htmllogo.png", alt: "HTML" },
  { src: "/logos/expo-seeklogo.png", alt: "Expo" },
  { src: "/logos/gmbinder.png", alt: "GMBinder" },
  { src: "/logos/gimp.png", alt: "Gimp" },
  { src: "/logos/csslogo.png", alt: "CSS" },
  { src: "/logos/chatgptcut.png", alt: "ChatGPT" },
  { src: "/logos/Microsoft_Azure.svg", alt: "Azure" },
  { src: "/logos/dotnet-logo.png", alt: "Dotnet" },
  { src: "/logos/PHP-logo.svg", alt: "PHP" },
  { src: "/logos/wordpress.png", alt: "Wordpress" },
];

export default function LogoGrid() {
  return (
    <div className="flex md:py-16 py-8 flex-wrap gap-4 mt-4 justify-start">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
