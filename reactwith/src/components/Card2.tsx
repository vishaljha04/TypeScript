import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export const Card2 = ({ title, children, footer }: CardProps) => {
  return (
    <section
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "16px 0",
      
      }}
    >
      <h2
        style={{
          margin: "0 0 12px",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          marginBottom: footer ? "12px" : "0",
        }}
      >
        {children}
      </div>

      {footer && (
        <footer
          style={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "8px",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          {footer}
        </footer>
      )}
    </section>
  );
};
