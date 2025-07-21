// TypeScript utility to join class names conditionally
export function cn(
  ...args: Array<string | Record<string, boolean> | undefined | null | false>
): string {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return [arg];
      if (typeof arg === "object") {
        return Object.entries(arg)
          .filter(([_, v]) => !!v)
          .map(([k]) => k);
      }
      return [];
    })
    .join(" ");
}
