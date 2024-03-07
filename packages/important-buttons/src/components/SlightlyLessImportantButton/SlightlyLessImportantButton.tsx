import styles from "./SlightlyLessImportantButton.module.css";

interface SlightlyLessImportantButtonProps
  extends React.RefAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function SlightlyLessImportantButton({
  children,
  variant = "primary",
  disabled,
  ...attributes
}: SlightlyLessImportantButtonProps) {
  return (
    <button {...attributes} disabled={disabled} className={styles[variant]}>
      SLIGHTLY LESS IMPORTANT
    </button>
  );
}
