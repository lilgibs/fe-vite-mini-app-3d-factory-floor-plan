import { useEffect, useRef, useState } from 'react'
import type { IMachineProps } from '../../domain/models/machine';
import { machines } from '../../data/machines';

export default function useFloorPlanViewModel() {
  const [data, _setData] = useState<IMachineProps[]>(machines)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [onReset, setOnReset] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

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


  const handleToggleExpandMobile = () => {
    setIsExpanded(prev => !prev);
  };

  function focusCameraTo(target: [number, number, number]) {
    const controls = canvasControlsRef.current;
    if (controls) {
      controls.target.set(target[0], target[1] + 2, target[2]); // Arahkan fokus
      controls.update()
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

  useEffect(() => {
    setOnReset(true);

    const timeoutId = setTimeout(() => {
      setOnReset(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

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
    isExpanded, setIsExpanded,
    handleToggleExpandMobile
  }
}
