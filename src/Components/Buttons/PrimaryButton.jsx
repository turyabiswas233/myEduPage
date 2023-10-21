const PrimaryButton = ({
  classes,
  onClick,
  icon,
  text,
  children,
  textClasses,
  type,
}) => {
  return (
    <button
      className={
        "p-2.5 text-md text-primary flex flex-row gap-2 uppercase items-center font-medium rounded-md" +
        ` ${classes}`
      }
      onClick={onClick}
      type={type || "button"}
    >
      {children ? (
        children
      ) : (
        <>
          {text && <p className={`text-sm ${textClasses}`}>{text}</p>}
          {icon && icon}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
