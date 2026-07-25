import { cn } from "@/lib/utils";

/**
 * The page is drawn inside a fixed-width column with a hairline down each
 * side. Every section wraps its content in this so the two rules read as one
 * continuous frame. Dark sections pass their own border colour through
 * `className` — cn() lets that win over the default hairline.
 */
export function Frame({ as: Tag = "div", className, children }) {
  return (
    <Tag className={cn("shell border-x border-hairline", className)}>
      {children}
    </Tag>
  );
}
