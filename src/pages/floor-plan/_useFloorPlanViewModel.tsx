import { useEffect, useRef, useState } from 'react'
import type { IMachineProps } from '../../domain/models/machine';

export default function useFloorPlanViewModel() {
  const [data, _setData] = useState<IMachineProps[]>([
    {
      name: 'Tag 1001',
      position: [-0.6, 4, 0.2],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Running"
    },
    {
      name: 'Tag 1002',
      position: [0.04, 4, 3.1],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Running"
    },
    {
      name: 'Tag 1003',
      position: [2.9, 4, 3.9],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Maintenance"
    },
    {
      name: 'Tag 1004',
      position: [7.1, 4, 3.9],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Running"
    },
    {
      name: 'Tag 1005',
      position: [16, 4, 1.2],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Idle"
    },
    {
      name: 'Tag 1006',
      position: [17.9, 4, 5.3],
      cycleTime: "12,20s",
      oee: "66,37%",
      firstTimeYield: "382,75 pcs",
      scrap: "2,25%",
      downtime: "34,5",
      changeover: "8,75",
      energy: "1.234,67",
      status: "Running"
    },
  ])
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [onReset, setOnReset] = useState<boolean>(false);

  // Ref
  const canvasControlsRef = useRef<any>(null)
  const fullScreenRef = useRef<HTMLDivElement>(null);

  // Function
  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    const el = fullScreenRef.current;

    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  function focusCameraTo(target: [number, number, number]) {
    const controls = canvasControlsRef.current;
    if (controls) {
      controls.target.set(...target); // Arahkan fokus
      controls.object.position.set(
        target[0] + 5,
        target[1] + 5,
        target[2] + 5
      ); 
      controls.update(); // Perbarui tampilan
    }
  }

  const handleZoomOut = () => {
    if (canvasControlsRef.current) {
      canvasControlsRef.current.dollyIn(1.5)
      canvasControlsRef.current.update()
    }
  }

  const handleZoomIn = () => {
    if (canvasControlsRef.current) {
      canvasControlsRef.current.dollyOut(1.5)
      canvasControlsRef.current.update()
    }
  }

  // Hooks
  useEffect(() => {
    function handleFullScreenChange() {
      setOnReset(true);

      setTimeout(() => {
        setOnReset(false);
      }, 500);
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return {
    fullScreenRef,
    canvasControlsRef,
    onReset,
    handleToggleFullscreen,
    handleZoomOut,
    handleZoomIn,
    isFullscreen, setIsFullscreen,
    data,
    activeTooltip, setActiveTooltip,
    focusCameraTo,
  }
}
