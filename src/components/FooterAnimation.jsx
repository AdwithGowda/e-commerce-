import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const FooterAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let isJumping = false;
    let ballY = 0;
    let ballVy = 0;
    const g = 0.6;
    const v = 3.5;
    const margin = 35;
    const ballRadius = 12;
    const obstacleWidth = 60;

    let logicalWidth = window.innerWidth;
    const logicalHeight = 170;

    let obstacles = [];
    
    const generateObstacle = (xPos) => {
      const height = 30 + Math.random() * 60; // Random height between 30 and 90
      return {
        x: xPos,
        width: obstacleWidth,
        height
      };
    };

    // Initialize obstacles
    let currentX = Math.max(logicalWidth * 0.4, 300);
    for (let i = 0; i < 8; i++) {
      obstacles.push(generateObstacle(currentX));
      currentX += 250 + Math.random() * 300; // Closer spacing for more boxes
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        logicalWidth = entry.contentRect.width;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = logicalWidth * dpr;
        canvas.height = logicalHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${logicalWidth}px`;
        canvas.style.height = `${logicalHeight}px`;
      }
    });
    
    resizeObserver.observe(container);
    let lastTime = 0;

    const loop = (time) => {
      if (!lastTime) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;
      const timeScale = Math.min(dt / (1000 / 60), 3); // Normalize to 60fps

      const ballX = Math.min(200, logicalWidth * 0.2);
      const groundY = logicalHeight - 15;

      // Update jump logic
      if (!isJumping) {
        // Find the next approaching obstacle
        const nextObs = obstacles.find(o => o.x + o.width > ballX);
        if (nextObs) {
          const distToCenter = nextObs.x + (nextObs.width / 2) - ballX;
          const hMax = nextObs.height + margin;
          const tPeak = Math.sqrt((2 * hMax) / g);
          const startDist = v * tPeak;
          
          // Trigger physics-based jump
          if (distToCenter > 0 && distToCenter <= startDist) {
            isJumping = true;
            ballVy = g * tPeak;
          }
        }
      }

      // Apply physics to ball
      if (isJumping) {
        ballY += ballVy * timeScale;
        ballVy -= g * timeScale;
        if (ballY <= 0) {
          ballY = 0;
          ballVy = 0;
          isJumping = false;
        }
      }

      // Move obstacles continuously from right to left
      obstacles.forEach(o => o.x -= v * timeScale);

      // Seamlessly recycle obstacles that leave the screen
      if (obstacles.length > 0 && obstacles[0].x + obstacles[0].width < 0) {
        obstacles.shift();
        const lastObs = obstacles[obstacles.length - 1];
        const spacing = 250 + Math.random() * 300;
        const newX = lastObs ? Math.max(logicalWidth, lastObs.x + spacing) : logicalWidth + spacing;
        obstacles.push(generateObstacle(newX));
      }

      // Render Background
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      const fgColor = themeRef.current === 'dark' ? '#ffffff' : '#000000';

      // Render Ground Line
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(logicalWidth, groundY);
      ctx.strokeStyle = fgColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Render Obstacles (stepped pyramid design)
      ctx.fillStyle = fgColor;
      obstacles.forEach(o => {
        const h1 = o.height;          // Top tier height (full)
        const h2 = o.height * 0.66;   // Middle tier height
        const h3 = o.height * 0.33;   // Bottom tier height
        
        const w1 = o.width * 0.33;    // Top tier width
        const w2 = o.width * 0.66;    // Middle tier width
        const w3 = o.width;           // Bottom tier width

        // Draw overlapping from tallest/narrowest to shortest/widest to prevent 1px gaps
        ctx.fillRect(o.x + (o.width - w1) / 2, groundY - h1, w1, h1);
        ctx.fillRect(o.x + (o.width - w2) / 2, groundY - h2, w2, h2);
        ctx.fillRect(o.x, groundY - h3, w3, h3);
      });

      // Render Ball
      ctx.beginPath();
      ctx.arc(ballX, groundY - ballY - ballRadius, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = fgColor;
      ctx.fill();

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', overflow: 'hidden', height: '170px' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
};

export default FooterAnimation;
