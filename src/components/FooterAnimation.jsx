import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { FaTshirt, FaShoePrints, FaBriefcase, FaCog, FaGlasses, FaDog } from "react-icons/fa";
import { PiWatchFill } from "react-icons/pi";

const icons = [FaTshirt, PiWatchFill, FaShoePrints, FaBriefcase, FaCog, FaGlasses];

const FooterAnimation = () => {
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const { theme } = useTheme();

  const logicalWidthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 1000);
  const obstaclesRefs = useRef({});

  // Initialize data statically once so React and physics loop are perfectly aligned
  const obstaclesData = useRef(
    (() => {
      let currentX = Math.max(logicalWidthRef.current * 0.4, 300);
      return Array.from({ length: 12 }).map((_, i) => {
        const IconComp = icons[i % icons.length];
        const x = currentX;
        currentX += 150 + Math.random() * 100;
        return { id: i, Icon: IconComp, initialX: x };
      });
    })()
  );
  
  const physicsState = useRef({
    isJumping: false,
    ballY: 0,
    ballVy: 0,
    obstacles: [],
    logicalWidth: logicalWidthRef.current
  });

  useEffect(() => {
    const state = physicsState.current;
    state.logicalWidth = window.innerWidth;
    
    // Seed physics state with initial rendering positions
    state.obstacles = obstaclesData.current.map(ob => ({ 
      id: ob.id, 
      x: ob.initialX, 
      width: 48, 
      height: 48 
    }));

    let animationFrameId;
    const g = 0.6;
    const v = 3.5;
    const margin = 15; // Tighter margin for a more natural jump over the icons
    let lastTime = 0;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        state.logicalWidth = entry.contentRect.width;
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const loop = (time) => {
      if (!lastTime) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;
      const timeScale = Math.min(dt / (1000 / 60), 3); // Normalize to 60fps

      const ballX = Math.min(200, state.logicalWidth * 0.2);

      // Update jump logic
      if (!state.isJumping) {
        // Find the closest approaching obstacle
        let nextObs = null;
        let minX = Infinity;
        state.obstacles.forEach(o => {
          if (o.x + o.width > ballX && o.x < minX) {
            minX = o.x;
            nextObs = o;
          }
        });

        if (nextObs) {
          const distToCenter = nextObs.x + (nextObs.width / 2) - ballX;
          const hMax = nextObs.height + margin;
          const tPeak = Math.sqrt((2 * hMax) / g);
          const startDist = v * tPeak;
          
          // Trigger physics-based jump
          if (distToCenter > 0 && distToCenter <= startDist) {
            state.isJumping = true;
            state.ballVy = g * tPeak;
          }
        }
      }

      // Apply physics to ball
      if (state.isJumping) {
        state.ballY += state.ballVy * timeScale;
        state.ballVy -= g * timeScale;
        if (state.ballY <= 0) {
          state.ballY = 0;
          state.ballVy = 0;
          state.isJumping = false;
        }
      }

      // Move obstacles continuously from right to left
      state.obstacles.forEach(o => {
        o.x -= v * timeScale;
        // Recycle obstacle if it leaves the screen
        if (o.x + o.width < -50) {
          const maxCurrentX = Math.max(...state.obstacles.map(ob => ob.x));
          o.x = Math.max(state.logicalWidth, maxCurrentX) + 150 + Math.random() * 100;
        }
        
        // Update DOM directly for perfect 60fps without React re-renders
        const el = obstaclesRefs.current[o.id];
        if (el) {
          el.style.transform = `translateX(${o.x}px)`;
          el.style.visibility = 'visible'; // Show after first frame positioning
        }
      });

      // Update Ball DOM
      if (ballRef.current) {
        ballRef.current.style.transform = `translateY(-${state.ballY}px)`;
        ballRef.current.style.left = `${ballX}px`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fgColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '170px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Ground Line */}
      <div 
        style={{
          position: 'absolute',
          bottom: '15px',
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: fgColor,
          transition: 'background-color 0.3s ease'
        }}
      />

      {/* Dog (formerly Ball) */}
      <div 
        ref={ballRef}
        style={{
          position: 'absolute',
          bottom: '17px',
          width: '48px',
          height: '48px',
          color: fgColor,
          marginLeft: '-24px', // Centers the div on the calculated X position
          zIndex: 10,
          willChange: 'transform',
          transition: 'color 0.3s ease'
        }}
      >
        <FaDog size={48} />
      </div>

      {/* Obstacle Icons */}
      {obstaclesData.current.map((ob) => (
        <div
          key={ob.id}
          ref={el => obstaclesRefs.current[ob.id] = el}
          style={{
            position: 'absolute',
            bottom: '17px', // Sits exactly on top of the 2px ground line (15+2)
            left: 0,
            width: '48px',
            height: '48px',
            color: fgColor,
            visibility: 'hidden', // Hide until physics loop positions them
            willChange: 'transform',
            transition: 'color 0.3s ease'
          }}
        >
          <ob.Icon size={48} />
        </div>
      ))}
    </div>
  );
};

export default FooterAnimation;
