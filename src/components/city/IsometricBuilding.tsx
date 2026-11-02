"use client";

import React from "react";
import { CityBuilding } from "@/data/city";

interface IsometricBuildingProps {
  building: CityBuilding;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (building: CityBuilding) => void;
  onHover: (building: CityBuilding | null) => void;
  tileWidth?: number;
  tileHeight?: number;
  originX?: number;
  originY?: number;
}

export const IsometricBuilding: React.FC<IsometricBuildingProps> = ({
  building,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  tileWidth = 130,
  tileHeight = 65,
  originX = 500,
  originY = 130,
}) => {
  const { col, row, width, depth, height } = building.isoCoordinates;

  // Isometric 2.5D math
  // Base center point on ground
  const baseX = originX + (col - row) * (tileWidth / 2);
  const baseY = originY + (col + row) * (tileHeight / 2);

  // Scaled dimensions
  const w = (width * tileWidth) / 2;
  const d = (depth * tileHeight) / 2;
  const h = height;

  // Ground 4 points (Isometric Diamond)
  const pBottom = { x: baseX, y: baseY + d };
  const pRight = { x: baseX + w, y: baseY };
  const pLeft = { x: baseX - w, y: baseY };
  const pTop = { x: baseX, y: baseY - d };

  // Elevated roof 4 points (-h on Y)
  const rBottom = { x: pBottom.x, y: pBottom.y - h };
  const rRight = { x: pRight.x, y: pRight.y - h };
  const rLeft = { x: pLeft.x, y: pLeft.y - h };
  const rTop = { x: pTop.x, y: pTop.y - h };

  // Colors & shading
  const accent = building.accentColor;
  const isHighlighted = isSelected || isHovered;

  // Shading: Left wall (darker shadow), Right wall (medium shadow), Roof (brightest / illuminated)
  const leftWallFill = isHighlighted ? "#1E293B" : "#111827";
  const rightWallFill = isHighlighted ? "#334155" : "#1F2937";
  const roofFill = isHighlighted ? "#475569" : "#374151";

  // Generate window grids on left and right walls
  const floors = building.floors || 6;
  const windowsPerFloor = 3;

  return (
    <g
      className="cursor-pointer transition-transform duration-300 group"
      onClick={() => onSelect(building)}
      onMouseEnter={() => onHover(building)}
      onMouseLeave={() => onHover(null)}
      tabIndex={0}
      role="button"
      aria-label={`${building.name} - ${building.subtitle}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(building);
        }
      }}
    >
      {/* Base Foundation Glow / Shadow */}
      <polygon
        points={`${pTop.x},${pTop.y} ${pRight.x},${pRight.y} ${pBottom.x},${pBottom.y} ${pLeft.x},${pLeft.y}`}
        fill={isHighlighted ? building.glowColor : "rgba(0, 0, 0, 0.45)"}
        className="transition-colors duration-300"
      />

      {/* Ground Boundary Line */}
      <polygon
        points={`${pTop.x},${pTop.y} ${pRight.x},${pRight.y} ${pBottom.x},${pBottom.y} ${pLeft.x},${pLeft.y}`}
        fill="none"
        stroke={isHighlighted ? accent : "rgba(255, 255, 255, 0.1)"}
        strokeWidth={isHighlighted ? "2" : "1"}
      />

      {/* Left Wall */}
      <polygon
        points={`${pLeft.x},${pLeft.y} ${pBottom.x},${pBottom.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`}
        fill={leftWallFill}
        stroke={isHighlighted ? accent : "rgba(255, 255, 255, 0.15)"}
        strokeWidth="1"
      />

      {/* Left Wall Windows */}
      {Array.from({ length: floors }).map((_, fIdx) => {
        const floorProgress = (fIdx + 0.6) / floors;
        const fyBottom = pBottom.y - h * floorProgress;
        const fyLeft = pLeft.y - h * floorProgress;
        return Array.from({ length: windowsPerFloor }).map((_, wIdx) => {
          const wp = (wIdx + 1) / (windowsPerFloor + 1);
          const wx = pLeft.x + (pBottom.x - pLeft.x) * wp;
          const wy = fyLeft + (fyBottom - fyLeft) * wp;
          const isWindowLit = (fIdx + wIdx + building.id.length) % 2 === 0;
          return (
            <circle
              key={`lw-${fIdx}-${wIdx}`}
              cx={wx}
              cy={wy}
              r={1.8}
              fill={isWindowLit ? (isHighlighted ? "#FFFFFF" : accent) : "#475569"}
              opacity={isWindowLit ? 0.9 : 0.4}
            />
          );
        });
      })}

      {/* Right Wall */}
      <polygon
        points={`${pBottom.x},${pBottom.y} ${pRight.x},${pRight.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y}`}
        fill={rightWallFill}
        stroke={isHighlighted ? accent : "rgba(255, 255, 255, 0.15)"}
        strokeWidth="1"
      />

      {/* Right Wall Windows */}
      {Array.from({ length: floors }).map((_, fIdx) => {
        const floorProgress = (fIdx + 0.6) / floors;
        const fyBottom = pBottom.y - h * floorProgress;
        const fyRight = pRight.y - h * floorProgress;
        return Array.from({ length: windowsPerFloor }).map((_, wIdx) => {
          const wp = (wIdx + 1) / (windowsPerFloor + 1);
          const wx = pBottom.x + (pRight.x - pBottom.x) * wp;
          const wy = fyBottom + (fyRight - fyBottom) * wp;
          const isWindowLit = (fIdx * 2 + wIdx + building.name.length) % 3 !== 0;
          return (
            <circle
              key={`rw-${fIdx}-${wIdx}`}
              cx={wx}
              cy={wy}
              r={1.8}
              fill={isWindowLit ? (isHighlighted ? "#FFFFFF" : accent) : "#475569"}
              opacity={isWindowLit ? 0.9 : 0.4}
            />
          );
        });
      })}

      {/* Roof Polygon */}
      <polygon
        points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`}
        fill={roofFill}
        stroke={isHighlighted ? "#FFFFFF" : accent}
        strokeWidth={isHighlighted ? "2" : "1.2"}
      />

      {/* Roof Architecture Details Based on roofType */}
      {building.roofType === "antenna" && (
        <g>
          {/* Main transmission spire */}
          <line
            x1={rBottom.x}
            y1={rBottom.y - d / 2}
            x2={rBottom.x}
            y2={rBottom.y - d / 2 - 28}
            stroke={accent}
            strokeWidth="2.5"
          />
          {/* Beacon light */}
          <circle
            cx={rBottom.x}
            cy={rBottom.y - d / 2 - 28}
            r="3.5"
            fill="#EF4444"
            className="animate-ping"
          />
          <circle
            cx={rBottom.x}
            cy={rBottom.y - d / 2 - 28}
            r="2.5"
            fill="#F87171"
          />
        </g>
      )}

      {building.roofType === "helipad" && (
        <g>
          {/* Helipad circle */}
          <ellipse
            cx={rBottom.x}
            cy={rBottom.y - d / 2}
            rx={w * 0.45}
            ry={d * 0.45}
            fill="#0F172A"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          {/* Helipad 'H' */}
          <text
            x={rBottom.x}
            y={rBottom.y - d / 2 + 3}
            textAnchor="middle"
            fill="#F59E0B"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            H
          </text>
        </g>
      )}

      {building.roofType === "glass-dome" && (
        <ellipse
          cx={rBottom.x}
          cy={rBottom.y - d / 2}
          rx={w * 0.55}
          ry={d * 0.55}
          fill="rgba(56, 189, 248, 0.4)"
          stroke="#38BDF8"
          strokeWidth="1.5"
        />
      )}

      {building.roofType === "solar-panels" && (
        <g>
          <polygon
            points={`${rTop.x},${rTop.y + 4} ${rRight.x - 6},${rRight.y} ${rBottom.x},${rBottom.y - 4} ${rLeft.x + 6},${rLeft.y}`}
            fill="#0284C7"
            stroke="#38BDF8"
            strokeWidth="1"
          />
        </g>
      )}

      {building.roofType === "stepped" && (
        <polygon
          points={`${rTop.x},${rTop.y - 6} ${rRight.x - 8},${rRight.y - 6} ${rBottom.x},${rBottom.y - 6} ${rLeft.x + 8},${rLeft.y - 6}`}
          fill={accent}
          opacity="0.85"
        />
      )}

      {building.roofType === "spire" && (
        <g>
          <polygon
            points={`${rBottom.x},${rBottom.y - d / 2 - 24} ${rLeft.x + 8},${rLeft.y} ${rRight.x - 8},${rRight.y}`}
            fill={accent}
            opacity="0.75"
          />
          <circle
            cx={rBottom.x}
            cy={rBottom.y - d / 2 - 24}
            r="3"
            fill="#FCD34D"
            className="animate-pulse"
          />
        </g>
      )}

      {building.roofType === "clock-tower" && (
        <g>
          <rect
            x={rBottom.x - 8}
            y={rBottom.y - d / 2 - 18}
            width="16"
            height="18"
            fill="#0F172A"
            stroke={accent}
            strokeWidth="1"
          />
          <circle
            cx={rBottom.x}
            cy={rBottom.y - d / 2 - 9}
            r="4"
            fill="#FEF08A"
          />
        </g>
      )}

      {/* Floating Hover Label Badge */}
      <g
        transform={`translate(${rBottom.x}, ${rTop.y - (building.roofType === 'antenna' || building.roofType === 'spire' ? 38 : 16)})`}
        className={`transition-all duration-200 pointer-events-none ${
          isHighlighted ? "opacity-100" : "opacity-80 group-hover:opacity-100"
        }`}
      >
        {/* Badge Background Pill */}
        <rect
          x="-55"
          y="-13"
          width="110"
          height="22"
          rx="11"
          fill="#0F172A"
          stroke={isHighlighted ? accent : "rgba(255, 255, 255, 0.25)"}
          strokeWidth={isHighlighted ? "1.8" : "1"}
          filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.8))"
        />

        {/* Status Indicator Dot */}
        <circle
          cx="-44"
          cy="-2"
          r="3"
          fill={building.badge === "IN PROGRESS" ? "#F59E0B" : accent}
        />

        {/* Short Title Label */}
        <text
          x="0"
          y="2"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          {building.name.length > 15 ? building.name.slice(0, 14) + "…" : building.name}
        </text>
      </g>
    </g>
  );
};
