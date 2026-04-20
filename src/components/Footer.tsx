import { site } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-semibold">{site.name}</div>
          <div className="text-sm text-white/70 mt-1">{site.address}</div>
        </div>

        <div className="flex items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white transition" href={site.instagram} target="_blank">
            Instagram
          </a>
          <a className="hover:text-white transition" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
