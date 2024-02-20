import styles from "./TestComponent.module.css";

interface TestComponentProps extends React.RefAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function TestComponent({
  children,
  variant = "primary",
  ...attributes
}: TestComponentProps) {
  return (
    <div {...attributes} className={styles[variant]}>
      {children}
    </div>
  );
}
