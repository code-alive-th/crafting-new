import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkDetailPage from "@/components/works/WorkDetailPage";
import { WORK_DETAILS } from "@/components/works/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return WORK_DETAILS.map((work) => ({ slug: work.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = WORK_DETAILS.find((w) => w.id === slug);
  if (!work) return {};
  return {
    title: `${work.client} — Works | CRAFTING LAB`,
    description: `${work.client} — ${work.details.replace(/\n/g, " ")}. Digital marketing case study by CRAFTING LAB in Chiang Mai, Thailand.`,
    alternates: {
      canonical: `/works/${work.id}`,
    },
  };
}

export default async function WorkDetailRoute({ params }: Props) {
  const { slug } = await params;
  const work = WORK_DETAILS.find((w) => w.id === slug);
  if (!work) notFound();

  return (
    <>
      <Navbar />
      <main>
        <WorkDetailPage work={work} />
      </main>
      <Footer />
    </>
  );
}
