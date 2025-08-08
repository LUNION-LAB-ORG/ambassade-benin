"use client";

import {
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { InputNewsletter } from "../../ui/input-newsletter";

const serviceLinks = [
  { text: "Mistakes to Avoid", href: "#" },
  { text: "Your Startup", href: "#" },
  { text: "Know About Fonts", href: "#" },
  { text: "Typography Tips", href: "#" },
];

const helpfulLinks = [
  { text: "Latest News", href: "#" },
  { text: "Careers", href: "#" },
  { text: "General Inquiries", href: "#" },
  { text: "Case Studies", href: "#" },
];

function FooterColumnList({
  items,
  icon,
}: {
  items: { text: string; href?: string }[];
  icon?: ReactNode;
}) {
  return (
    <ul className="mt-6 space-y-4 text-sm">
      {items.map(({ text, href }) => (
        <li key={text}>
          <a
            href={href}
            className="flex items-center gap-2 transition hover:underline"
          >
            {icon}
            <span>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterColumn({
  title,
  items,
  icon,
  children,
}: {
  title: string;
  items?: { text: string; href?: string }[];
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="text-center sm:text-left  ">
      <p className="text-lg font-semibold">{title}</p>
      {items?.length ? (
        <FooterColumnList items={items} icon={icon} />
      ) : (
        <div className="mt-6  text-sm">{children}</div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1E1A4D] px-10 text-white w-full pb-10 font-['Plus Jakarta Sans']">
      <div className="mx-auto max-w-screen-2xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-4">
          {/* Colonne 1 : Logo + horaires */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <div className="relative bg-white px-2 py-1 rounded">
                <Image
                  src="/images/all-img/logo.png"
                  alt="Logo Ambassade du Bénin"
                  className="w-full max-w-52 h-auto"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <div className="mt-6 text-sm text-center sm:text-left leading-relaxed space-y-2">
              <p>Ouvert du Lundi au Vendredi</p>
              <ul className="font-bold">
                <li>Matin : 08h30 à 13h00</li>
                <li>Pause : 13h00 à 14h00</li>
                <li>Après-midi : 14h00 à 17h30</li>
              </ul>
              <div>
                <p>Dépôt des dossiers :</p>
                <p className="font-bold">- 8h30 à 11h00</p>
              </div>
              <div>
                <p>Retrait des dossiers :</p>
                <p className="font-bold">- 14h00 à 16h30 (48h plus tard)</p>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <FooterColumn
            title="Services"
            items={serviceLinks}
            icon={<Check className="w-4 h-4 text-[#83CD20]" />}
          />

          {/* Colonne 3 : Useful Links */}
          <FooterColumn
            title="Useful Links"
            items={helpfulLinks}
            icon={<ChevronRight className="w- h-4 text-[#83CD20]" />}
          />

          {/* Colonne 4 : Newsletter */}
          <FooterColumn title="Subscribe Our Newsletter"    >
            <p className="mb-4   w-72 mr-auto ml-auto ">
              Corporate business typically refers to large-scale organizational structures.
            </p>
            <InputNewsletter />
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}
