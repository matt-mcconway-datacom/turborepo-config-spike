import {
  ImportantButton,
  SlightlyLessImportantButton,
} from "@repo/important-buttons";
import styles from "./TestComponent.module.css";

interface TestComponentProps extends React.RefAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function TestComponent({
  children,
  variant = "primary",
  disabled,
  ...attributes
}: TestComponentProps) {
  return (
    <div {...attributes} className={styles[variant]}>
      {children}
      {disabled ? " disabled" : " enabled"}
      <ImportantButton variant="secondary" />
      <SlightlyLessImportantButton variant="secondary" />
    </div>
  );
}
