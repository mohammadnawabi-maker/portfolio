import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subheading?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subheading,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls} mb-14`}>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-24 rounded-full gradient-underline" />
      {subheading && (
        <p className="text-slate-400 max-w-2xl leading-relaxed">{subheading}</p>
      )}
    </Reveal>
  );
}
