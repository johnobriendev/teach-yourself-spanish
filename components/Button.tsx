import Link from "next/link";

type BaseProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsLink = BaseProps & { as: "link"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses = {
  sm:  "px-4 py-2 text-sm",
  md:  "px-6 py-3 text-sm",
  lg:  "px-8 py-4 text-base",
};

const variantClasses = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary:
    "bg-surface border-2 border-accent text-accent hover:bg-accent-light focus-visible:ring-accent",
};

function getClasses(variant: "primary" | "secondary", size: "sm" | "md" | "lg", extra = "") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-ui font-medium transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const classes = getClasses(variant, size, className);

  if (props.as === "link") {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton & { as?: "button" };
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
