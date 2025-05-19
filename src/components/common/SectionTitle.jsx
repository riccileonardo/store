const SectionTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-sm font-medium text-gray-700 mb-2 text-left ${className}`}>
      {children}
    </h3>
  );
};

export default SectionTitle;
