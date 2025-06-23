import { Html } from '@react-three/drei';
import { Info } from 'lucide-react';
import React, { forwardRef } from 'react';

interface IProps {
  name: string;
  position: [number, number, number];
  onFocusCamera?: (position: [number, number, number]) => void;
  setActiveTooltip: React.Dispatch<React.SetStateAction<string | null>>;
}

const Button3D = forwardRef<HTMLDivElement, IProps>(function Button3D(
  { name, position, setActiveTooltip, onFocusCamera },
  ref
) {
  return (
    <Html
      className="flex flex-col gap-1 md:gap-2 items-center"
      key={name}
      position={position}
      center
      occlude
      zIndexRange={[0, 100]}
    >
      <div className="h-[28px] md:h-[42px] w-[70px] md:w-[100px] flex items-center justify-center bg-neutral-900 text-[10px] md:text-base text-white shadow rounded-md">
        {name}
      </div>
      <div
        ref={ref} // ref di sini valid karena pakai forwardRef
        onClick={(e) => {
          e.stopPropagation();
          setActiveTooltip((prev) => (prev === name ? null : name));
          onFocusCamera?.(position);
        }}
        className="p-1 bg-blue-500 text-white hover:bg-blue-600 rounded-full shadow cursor-pointer"
      >
        <Info />
      </div>
    </Html>
  );
});

export default Button3D;