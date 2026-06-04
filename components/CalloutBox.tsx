type CalloutBoxProps = {
  variant: "notebook-tip" | "why-this-matters" | "shortcuts";
  children: React.ReactNode;
};

export default function CalloutBox({ variant, children }: CalloutBoxProps) {
  if (variant === "notebook-tip") {
    return (
      <aside className="bg-gold-light border border-gold/30 rounded-xl p-6 flex gap-4 my-8">
        <span className="text-2xl leading-none mt-0.5" role="img" aria-label="pencil">
          ✏️
        </span>
        <div>
          <p className="font-ui font-medium text-xs text-gold uppercase tracking-widest mb-2">
            Notebook Tip
          </p>
          <div className="font-body text-text text-lg leading-relaxed">{children}</div>
        </div>
      </aside>
    );
  }

  if (variant === "shortcuts") {
    return (
      <aside className="bg-gold-light border border-gold/30 rounded-xl p-6 my-8">
        <p className="font-ui font-medium text-xs text-gold uppercase tracking-widest mb-2">
          Shortcuts That Work
        </p>
        <div className="font-body text-text text-lg leading-relaxed">{children}</div>
      </aside>
    );
  }

  return (
    <aside className="bg-accent-light border border-accent/20 rounded-xl p-6 my-8">
      <p className="font-ui font-medium text-xs text-accent uppercase tracking-widest mb-2">
        Why This Matters
      </p>
      <div className="font-body text-text text-lg leading-relaxed">{children}</div>
    </aside>
  );
}
