import React, { useRef, useState } from "react";

interface Prsion {
  fiestName: string;
  lastName: string;
}
interface Props {
  text?: string;
  ok?: boolean;
  num?: number;
  fun?: () => void;
  persion?: Prsion;
}
const Home: React.FC<Props> = ({ text }) => {
  const [state, setState] = useState<number | null>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputRef} type="number" />
    </div>
  );
};

export default Home;
