import React, { forwardRef, useState } from "react";

type ListProps = {
  className?: string;
  children?: React.ReactNode | string;
  rest: any;
  dropdown?: React.ReactNode;
};

export const List = forwardRef<HTMLLIElement, ListProps>(
  ({ className, children, dropdown, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <li ref={ref} className={className} {...rest}>
          <div onClick={handleToggle}>{children}</div>
          {isOpen && <div className="dropdown-content">{dropdown}</div>}
        </li>
      </>
    );
  }
);
