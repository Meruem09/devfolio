'use client';

import { useRef, useEffect, useState } from 'react';

interface EyePosition {
  x: number;
  y: number;
}

export default function FollowingEyes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const eyeGroupRef = useRef<SVGGElement>(null);

  const [eyeTransform, setEyeTransform] = useState('translate(0px, 0px)');
  const [bodyTransform, setBodyTransform] = useState('translate(-50%, 0)');

  // Constants
  const LEFT_EYE: EyePosition = { x: 285, y: 180 };
  const RIGHT_EYE: EyePosition = { x: 370, y: 180 };
  const CENTER_X = 260;
  const CENTER_Y = 200;
  const MAX_PUPIL_DISTANCE = 12;
  const MAX_EYE_MOVE = 4;
  const MAX_BODY_TILT = 2;
  const MAX_BODY_ROTATE = 3;

  const updatePupil = (
    pupil: SVGCircleElement,
    eyeCenter: EyePosition,
    mouseX: number,
    mouseY: number
  ) => {
    const dx = mouseX - eyeCenter.x;
    const dy = mouseY - eyeCenter.y;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(
      Math.sqrt(dx * dx + dy * dy) / 8,
      MAX_PUPIL_DISTANCE
    );

    const pupilX = eyeCenter.x + Math.cos(angle) * distance;
    const pupilY = eyeCenter.y + Math.sin(angle) * distance;

    pupil.setAttribute('cx', pupilX.toString());
    pupil.setAttribute('cy', pupilY.toString());
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current || !leftPupilRef.current || !rightPupilRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      
      // Check if mouse is reasonably close to the character
      const distanceToChar = Math.sqrt(
        Math.pow(e.clientX - (svgRect.left + svgRect.width / 2), 2) +
        Math.pow(e.clientY - (svgRect.top + svgRect.height / 2), 2)
      );

      // Only animate if mouse is within reasonable range (e.g., 800px)
      if (distanceToChar > 800) {
        return;
      }

      const scaleX = 520 / svgRect.width;
      const scaleY = 360 / svgRect.height;
      const mouseX = (e.clientX - svgRect.left) * scaleX;
      const mouseY = (e.clientY - svgRect.top) * scaleY;

      // Calculate direction from center to mouse
      const dx = mouseX - CENTER_X;
      const dy = mouseY - CENTER_Y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Prevent division by zero
      if (distance === 0) return;

      // Move the whole eye group (reduced movement)
      const eyeMoveX = (dx / distance) * MAX_EYE_MOVE;
      const eyeMoveY = (dy / distance) * MAX_EYE_MOVE;
      setEyeTransform(`translate(${eyeMoveX}px, ${eyeMoveY}px)`);

      // Subtle tilt (reduced movement)
      const tiltX = (dx / svgRect.width) * MAX_BODY_TILT;
      const tiltY = (dy / svgRect.height) * MAX_BODY_TILT;
      const rotate = (dx / svgRect.width) * MAX_BODY_ROTATE;

      setBodyTransform(`
        translate(-50%, 0)
        perspective(1000px) 
        rotateY(${tiltX}deg) 
        rotateX(${-tiltY}deg)
        rotateZ(${rotate}deg)
      `);

      // Update pupils
      updatePupil(leftPupilRef.current, LEFT_EYE, mouseX, mouseY);
      updatePupil(rightPupilRef.current, RIGHT_EYE, mouseX, mouseY);
    };

    const handleMouseLeave = () => {
      setBodyTransform('translate(-50%, 0)');
      setEyeTransform('translate(0px, 0px)');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative h-12 w-16 overflow-visible">
      {/* Character container - positioned to peek from header */}
      <div
        ref={containerRef}
        className="absolute -bottom-1 left-1/2 transition-transform duration-100 ease-out"
        style={{ 
          transform: bodyTransform,
          transformOrigin: 'center top'
        }}
      >
        <svg
          ref={svgRef}
          viewBox="100 80 280 160"
          className="h-14 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Face */}
          <path
            d="M410 205C410 318.218 326.718 270.5 213.5 270.5C100.282 270.5 0 318.218 0 205C0 91.7816 91.7816 0 205 0C318.218 0 410 91.7816 410 205Z"
            fill="#00D5FF"
          />

          {/* Eyes Group */}
          <g
            ref={eyeGroupRef}
            className="transition-transform duration-150 ease-out"
            style={{ transform: eyeTransform }}
          >
            {/* Left Eye */}
            <circle cx="285" cy="180" r="25" fill="#fff" />
            <circle
              ref={leftPupilRef}
              cx="285"
              cy="180"
              r="15"
              fill="#000"
            />

            {/* Right Eye */}
            <circle cx="370" cy="180" r="25" fill="#fff" />
            <circle
              ref={rightPupilRef}
              cx="370"
              cy="180"
              r="15"
              fill="#000"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}