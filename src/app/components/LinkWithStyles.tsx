import Link from "next/link";

type Prop = {
  href: string;
  text: string;
}

export const LinkWithStyles = ({href, text}: Prop) => {
  return (
    <Link
      href={href}
      style={{
        color: "blue",
        textDecoration: "underline",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      {text}
    </Link>
  );
};
