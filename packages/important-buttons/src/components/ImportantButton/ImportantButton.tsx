import styles from "./ImportantButton.module.css";

interface ImportantButtonProps extends React.RefAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function ImportantButton({
  children,
  variant = "primary",
  disabled,
  ...attributes
}: ImportantButtonProps) {
  return (
    <button {...attributes} disabled={disabled} className={styles[variant]}>
      IMPORTANT
    </button>
  );
}
