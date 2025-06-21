import { useGLTF } from '@react-three/drei'

export function FactoryModel({ ...props }: { [key: string]: any; }) {
  const { scene } = useGLTF('/factory_asset.glb');

  return (
    <primitive
      object={scene}
      // onClick={(e) => console.log(e.point)}
      {...props}
    />
  );
}