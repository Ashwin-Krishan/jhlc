import { useMemo } from "react";

import { historyContent } from "@/data/history";

type Language = "ta" | "en";

type HistoryBlock =
  | { type: "heading"; content: string; language: Language }
  | { type: "paragraph"; content: string; language: Language }
  | { type: "separator"; language?: Language };

const INLINE_ITALIC_PATTERN = /(_[^_]+_)/g;

const detectLanguage = (value: string): Language => (/[\u0B80-\u0BFF]/.test(value) ? "ta" : "en");

function renderInline(text: string) {
  return text.split(INLINE_ITALIC_PATTERN).map((segment, index) => {
    if (!segment) return null;
    if (segment.startsWith("_") && segment.endsWith("_")) {
      return (
        <em key={`italic-${index}`} className="font-semibold">
          {segment.slice(1, -1)}
        </em>
      );
    }
    return <span key={`text-${index}`}>{segment}</span>;
  });
}

export default function History() {
  const blocks = useMemo<HistoryBlock[]>(() => {
    return historyContent
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .filter(Boolean)
      .map<HistoryBlock>((raw) => {
        if (/^[\-—_/\\]+$/.test(raw)) {
          return { type: "separator" };
        }

        const normalised = raw.replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").trim();

        if (/^_.*_$/.test(normalised) && normalised.length <= 80) {
          const content = normalised.slice(1, -1).trim();
          return {
            type: "heading",
            content,
            language: detectLanguage(content),
          };
        }

        if (/^(Our\s+(Beginning|Journey))$/i.test(normalised)) {
          return { type: "heading", content: normalised, language: detectLanguage(normalised) };
        }

        return {
          type: "paragraph",
          content: normalised,
          language: detectLanguage(normalised),
        };
      });
  }, []);

  const groups = useMemo(() => {
    return blocks.reduce<Array<{ language: Language; items: HistoryBlock[] }>>((accumulator, block) => {
      if (block.type === "separator") {
        return accumulator;
      }

      const lastGroup = accumulator.at(-1);
      if (!lastGroup || lastGroup.language !== block.language) {
        accumulator.push({ language: block.language, items: [block] });
        return accumulator;
      }

      lastGroup.items.push(block);
      return accumulator;
    }, []);
  }, [blocks]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900">Heritage &amp; History</h1>
      <p className="mt-3 text-green-800 text-justify">
        A bilingual chronicle capturing the milestones of Jaffna Hindu Ladies College exactly as preserved in our archival
        record.
      </p>
      <article className="mt-6 space-y-20 rounded-3xl border border-green-100 bg-white p-6 shadow">
        {groups.map((group, groupIndex) => (
          <div
            key={`group-${groupIndex}`}
            className={`space-y-6 ${
              groupIndex === 0 ? "" : "border-t-2 border-green-200 pt-16 mt-4"
            }`.trim()}
            lang={group.language}
          >
            {group.items.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`heading-${groupIndex}-${index}`}
                    className="text-xl font-semibold text-green-900"
                    lang={block.language}
                  >
                    {block.content}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p
                    key={`paragraph-${groupIndex}-${index}`}
                    className="text-base leading-relaxed text-green-900 text-justify"
                    lang={block.language}
                  >
                    {renderInline(block.content)}
                  </p>
                );
              }

              return null;
            })}
          </div>
        ))}
      </article>
    </section>
  );
}
