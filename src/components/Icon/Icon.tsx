import { useEffect, useState } from "react";

type IconProps = {
  iconName: string;
};

export const Icon: React.FC<IconProps> = ({ iconName }) => {
  const [iconSrc, setIconSrc] = useState("");

  useEffect(() => {
    const mount = async () => {
      const result = await import(`assets/icons/${iconName}.png`);
      setIconSrc(result.default);
    };

    mount();
  }, [iconName]);

  return (
    <>
      <img src={iconSrc} alt={`icone do ${iconName}`} />
    </>
  );
};
