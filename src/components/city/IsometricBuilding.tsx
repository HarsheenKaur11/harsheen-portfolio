"use client";

import React from "react";
import { CityBuilding } from "@/data/city";

interface IsometricBuildingProps {
  building: CityBuilding;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (building: CityBuilding) => void;
  onHover: (building: CityBuilding | null) => void;
  timeOfDay?: "day" | "dusk" | "night";
}

export const IsometricBuilding: React.FC<IsometricBuildingProps> = ({
  building,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  timeOfDay = "day",
}) => {
  const { isoX, isoY, width, depth, height } = building.gridPos;
  const isHighlighted = isSelected || isHovered;
  const p = building.palette;

  // Isometric geometric vertices
  const bx = isoX;
  const by = isoY;
  const hw = width / 2;
  const hd = depth / 3;

  // Ground 4 points
  const gBottom = { x: bx, y: by + hd };
  const gRight = { x: bx + hw, y: by };
  const gLeft = { x: bx - hw, y: by };
  const gTop = { x: bx, y: by - hd };

  // Elevated roof 4 points (-height on Y)
  const rBottom = { x: gBottom.x, y: gBottom.y - height };
  const rRight = { x: gRight.x, y: gRight.y - height };
  const rLeft = { x: gLeft.x, y: gLeft.y - height };
  const rTop = { x: gTop.x, y: gTop.y - height };

  const isNight = timeOfDay === "night";
  const windowGlowColor = isHighlighted ? "#FFFFFF" : isNight ? "#FDE047" : "#FEF08A";

  return (
    <g
      className="cursor-pointer transition-transform duration-200 select-none group"
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
      {/* 1. SOFT ISOMETRIC DROP SHADOW ON GROUND */}
      <polygon
        points={`${gLeft.x - 12},${gLeft.y + 8} ${gBottom.x + 20},${gBottom.y + 12} ${gRight.x + 35},${gRight.y + 6} ${gTop.x},${gTop.y}`}
        fill="rgba(15, 23, 42, 0.28)"
      />

      {/* 2. GROUND PLINTH / LOT BORDER */}
      <polygon
        points={`${gTop.x},${gTop.y} ${gRight.x + 4},${gRight.y + 2} ${gBottom.x},${gBottom.y + 4} ${gLeft.x - 4},${gLeft.y + 2}`}
        fill="#E2E8F0"
        stroke={isHighlighted ? p.accent : "rgba(0,0,0,0.12)"}
        strokeWidth={isHighlighted ? 2.5 : 1}
      />

      {/* 3. LEFT FAÇADE WALL (Main illuminated face) */}
      <polygon
        points={`${gLeft.x},${gLeft.y} ${gBottom.x},${gBottom.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`}
        fill={p.wallMain}
        stroke={isHighlighted ? p.accent : "rgba(0,0,0,0.15)"}
        strokeWidth="1.2"
      />

      {/* 4. RIGHT FAÇADE WALL (Soft isometric shadow face) */}
      <polygon
        points={`${gBottom.x},${gBottom.y} ${gRight.x},${gRight.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y}`}
        fill={p.wallShadow}
        stroke={isHighlighted ? p.accent : "rgba(0,0,0,0.15)"}
        strokeWidth="1.2"
      />

      {/* 5. ARCHITECTURAL DETAILS & FAÇADES BY ROOF STYLE */}

      {/* STYLE A: COMFORT COTTAGE (My Comfort Home) */}
      {building.roofStyle === "comfort-cottage" && (
        <g>
          {/* Sloping Gabled Roof Peak */}
          <polygon
            points={`${rLeft.x - 6},${rLeft.y + 6} ${rBottom.x},${rBottom.y - 35} ${rRight.x + 6},${rRight.y + 6}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="2"
          />
          <polygon
            points={`${rBottom.x},${rBottom.y - 35} ${rRight.x + 6},${rRight.y + 6} ${rTop.x},${rTop.y - 35}`}
            fill={p.roofShadow}
            stroke={p.roofShadow}
            strokeWidth="1"
          />

          {/* Stone Chimney with animated smoke */}
          <rect x={rRight.x - 22} y={rTop.y - 50} width="12" height="24" fill="#78716C" stroke="#44403C" rx="1" />
          <circle cx={rRight.x - 16} cy={rTop.y - 56} r="3" fill="#F5F5F4" opacity="0.7" className="animate-pulse" />
          <circle cx={rRight.x - 14} cy={rTop.y - 62} r="4.5" fill="#E7E5E4" opacity="0.5" />

          {/* Left Wall Windows (Floor 2 & 1) */}
          <rect x={rLeft.x + 18} y={rLeft.y + 24} width="16" height="22" fill={windowGlowColor} stroke="#78350F" strokeWidth="1.5" rx="2" />
          <line x1={rLeft.x + 26} y1={rLeft.y + 24} x2={rLeft.x + 26} y2={rLeft.y + 46} stroke="#78350F" strokeWidth="1" />
          <line x1={rLeft.x + 18} y1={rLeft.y + 35} x2={rLeft.x + 34} y2={rLeft.y + 35} stroke="#78350F" strokeWidth="1" />
          {/* Flower box */}
          <rect x={rLeft.x + 16} y={rLeft.y + 45} width="20" height="3" fill="#DC2626" rx="1" />

          <rect x={rLeft.x + 42} y={rLeft.y + 36} width="16" height="22" fill={windowGlowColor} stroke="#78350F" strokeWidth="1.5" rx="2" />
          <rect x={rLeft.x + 40} y={rLeft.y + 57} width="20" height="3" fill="#F59E0B" rx="1" />

          {/* Front Porch & Door on Right Face */}
          <polygon
            points={`${gBottom.x + 8},${gBottom.y - 2} ${gBottom.x + 36},${gBottom.y - 12} ${rBottom.x + 36},${rBottom.y + 80} ${rBottom.x + 8},${rBottom.y + 90}`}
            fill="#B91C1C"
            opacity="0.9"
          />
          <rect x={gBottom.x + 14} y={gBottom.y - 38} width="14" height="28" fill="#78350F" stroke="#451A03" rx="2" />
          <circle cx={gBottom.x + 17} cy={gBottom.y - 24} r="1.5" fill="#FBBF24" />

          {/* Front Pathway & White Picket Fence */}
          <line x1={gBottom.x} y1={gBottom.y} x2={gBottom.x - 18} y2={gBottom.y + 16} stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" />
          <rect x={gBottom.x - 22} y={gBottom.y + 12} width="4" height="12" fill="#DC2626" rx="1" />
          <circle cx={gBottom.x - 20} cy={gBottom.y + 14} r="1" fill="#FCD34D" />
        </g>
      )}

      {/* STYLE B: CLASSICAL PEDIMENT (Central Bank) */}
      {building.roofStyle === "classical-pediment" && (
        <g>
          {/* Flat Classical Roof Platform */}
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Triangular Portico Pediment */}
          <polygon points={`${rLeft.x + 8},${rLeft.y - 4} ${rBottom.x},${rBottom.y - 28} ${rRight.x - 8},${rRight.y - 4}`} fill={p.roofShadow} stroke="#047857" strokeWidth="2" />
          {/* Classical Colonnade Columns (4 pillars) */}
          {[0.2, 0.4, 0.6, 0.8].map((pct, i) => {
            const px = rLeft.x + (rBottom.x - rLeft.x) * pct;
            const py = rLeft.y + (rBottom.y - rLeft.y) * pct;
            return <line key={i} x1={px} y1={py} x2={px} y2={py + height * 0.75} stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />;
          })}
          {/* Grand Stone Steps */}
          <polygon points={`${gBottom.x - 16},${gBottom.y + 4} ${gBottom.x + 16},${gBottom.y - 4} ${gBottom.x + 12},${gBottom.y + 14} ${gBottom.x - 20},${gBottom.y + 22}`} fill="#CBD5E1" stroke="#94A3B8" />
        </g>
      )}

      {/* STYLE C: GLASS SKYSCRAPER (NIQ Tower) */}
      {building.roofStyle === "glass-skyscraper" && (
        <g>
          {/* Tiered Setback Level */}
          <polygon
            points={`${rTop.x + 10},${rTop.y - 18} ${rRight.x - 10},${rRight.y - 18} ${rBottom.x},${rBottom.y - 24} ${rLeft.x + 10},${rLeft.y - 18}`}
            fill="#1E40AF"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />
          {/* Helipad Crown */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 32} rx={width * 0.28} ry={depth * 0.16} fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <text x={rBottom.x} y={rBottom.y - 28} textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold" fontFamily="monospace">
            H
          </text>

          {/* Grid Glass Facade Panes */}
          {Array.from({ length: 6 }).map((_, floor) => {
            const fy = rLeft.y + floor * 26 + 10;
            return (
              <line
                key={floor}
                x1={rLeft.x + 10}
                y1={fy}
                x2={rBottom.x - 8}
                y2={fy + (rBottom.y - rLeft.y) * 0.7}
                stroke="#93C5FD"
                strokeWidth="1.5"
                opacity="0.75"
              />
            );
          })}
        </g>
      )}

      {/* STYLE D: MEDIA STUDIO (FactShield) */}
      {building.roofStyle === "media-studio" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Broadcast Mast Antenna with flashing beacon */}
          <line x1={rBottom.x} y1={rBottom.y - 10} x2={rBottom.x} y2={rBottom.y - 45} stroke="#6366F1" strokeWidth="2.5" />
          <circle cx={rBottom.x} cy={rBottom.y - 45} r="4" fill="#EF4444" className="animate-ping" />
          <circle cx={rBottom.x} cy={rBottom.y - 45} r="2.5" fill="#F87171" />
          {/* Satellite Dish */}
          <ellipse cx={rBottom.x - 24} cy={rBottom.y - 16} rx="8" ry="4" fill="#E2E8F0" stroke="#94A3B8" />

          {/* Industrial Multi-Pane Windows */}
          <rect x={rLeft.x + 16} y={rLeft.y + 20} width="38" height="24" fill={windowGlowColor} stroke="#312E81" strokeWidth="1.5" rx="2" />
          <line x1={rLeft.x + 35} y1={rLeft.y + 20} x2={rLeft.x + 35} y2={rLeft.y + 44} stroke="#312E81" />
          <line x1={rLeft.x + 16} y1={rLeft.y + 32} x2={rLeft.x + 54} y2={rLeft.y + 32} stroke="#312E81" />
        </g>
      )}

      {/* STYLE E: CIVIC SUPPORT (SeniorSaathi Hub) */}
      {building.roofStyle === "civic-support" && (
        <g>
          <polygon
            points={`${rLeft.x - 4},${rLeft.y} ${rBottom.x},${rBottom.y - 20} ${rRight.x + 4},${rRight.y}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="2"
          />
          {/* Double Welcoming Arch Doors */}
          <path d={`M${gBottom.x - 14},${gBottom.y - 32} A10,10 0 0,1 ${gBottom.x + 6},${gBottom.y - 32} L${gBottom.x + 6},${gBottom.y} L${gBottom.x - 14},${gBottom.y} Z`} fill="#831843" stroke="#4C0519" strokeWidth="1.5" />
          {/* Rose Garden Bushes */}
          <circle cx={gBottom.x - 22} cy={gBottom.y - 4} r="6" fill="#F43F5E" />
          <circle cx={gBottom.x - 28} cy={gBottom.y - 2} r="5" fill="#FB7185" />
          <circle cx={gRight.x + 8} cy={gRight.y + 4} r="7" fill="#F43F5E" />
        </g>
      )}

      {/* STYLE F: EVENT ATRIUM (Planora AI) */}
      {building.roofStyle === "event-atrium" && (
        <g>
          {/* Tiered Glass Roof Canopy */}
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke="#D4AF37" strokeWidth="2" />
          {/* Golden Festoon String Lights across roofline */}
          <path
            d={`M${rLeft.x},${rLeft.y} Q${rBottom.x / 2 + rLeft.x / 2},${rBottom.y + 4} ${rBottom.x},${rBottom.y} Q${rBottom.x / 2 + rRight.x / 2},${rRight.y + 4} ${rRight.x},${rRight.y}`}
            fill="none"
            stroke="#FDE047"
            strokeWidth="1.2"
            strokeDasharray="4,4"
          />
          {/* Glass Atrium Entrance */}
          <polygon
            points={`${gBottom.x - 20},${gBottom.y - 35} ${gBottom.x + 20},${gBottom.y - 35} ${gBottom.x + 20},${gBottom.y} ${gBottom.x - 20},${gBottom.y}`}
            fill="rgba(254, 240, 138, 0.4)"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
        </g>
      )}

      {/* STYLE G: BRICK ACADEMY (Arcanum) */}
      {building.roofStyle === "brick-academy" && (
        <g>
          {/* Steep Gabled Roof */}
          <polygon points={`${rLeft.x - 4},${rLeft.y} ${rBottom.x},${rBottom.y - 26} ${rRight.x + 4},${rRight.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="2" />
          {/* Central Four-Sided Clock Tower */}
          <rect x={rBottom.x - 14} y={rBottom.y - 65} width="28" height="40" fill="#78350F" stroke="#451A03" rx="2" />
          <polygon points={`${rBottom.x - 16},${rBottom.y - 65} ${rBottom.x},${rBottom.y - 88} ${rBottom.x + 16},${rBottom.y - 65}`} fill="#451A03" />
          {/* Clock Dial Face */}
          <circle cx={rBottom.x} cy={rBottom.y - 48} r="6.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1" />
          <line x1={rBottom.x} y1={rBottom.y - 48} x2={rBottom.x} y2={rBottom.y - 52} stroke="#451A03" strokeWidth="1" />
          <line x1={rBottom.x} y1={rBottom.y - 48} x2={rBottom.x + 3} y2={rBottom.y - 48} stroke="#451A03" strokeWidth="1" />
        </g>
      )}

      {/* STYLE H: COLLEGIATE DOME (University) */}
      {building.roofStyle === "collegiate-dome" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.wallShadow} stroke="#94A3B8" />
          {/* Classical Copper Dome */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 20} rx={width * 0.3} ry={depth * 0.22} fill={p.roof} stroke={p.roofShadow} strokeWidth="2" />
          <polygon points={`${rBottom.x - 5},${rBottom.y - 32} ${rBottom.x},${rBottom.y - 42} ${rBottom.x + 5},${rBottom.y - 32}`} fill="#0F766E" />
          {/* Graduation Steps & Lawn */}
          <polygon points={`${gBottom.x - 20},${gBottom.y} ${gBottom.x + 20},${gBottom.y} ${gBottom.x + 14},${gBottom.y + 16} ${gBottom.x - 26},${gBottom.y + 16}`} fill="#E2E8F0" />
        </g>
      )}

      {/* STYLE I: MUSEUM ROTUNDA (Hall of Fame) */}
      {building.roofStyle === "museum-rotunda" && (
        <g>
          {/* Circular Rotunda Dome */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 18} rx={width * 0.35} ry={depth * 0.25} fill="url(#windowWarmGlow)" stroke="#B45309" strokeWidth="2.5" />
          <circle cx={rBottom.x} cy={rBottom.y - 32} r="4" fill="#F59E0B" className="animate-pulse" />
          {/* Statuary Terrace Pillars */}
          {[0.2, 0.4, 0.6, 0.8].map((pct, i) => (
            <line
              key={i}
              x1={rLeft.x + (rBottom.x - rLeft.x) * pct}
              y1={rLeft.y + (rBottom.y - rLeft.y) * pct + 8}
              x2={rLeft.x + (rBottom.x - rLeft.x) * pct}
              y2={rLeft.y + (rBottom.y - rLeft.y) * pct + 45}
              stroke="#FDE68A"
              strokeWidth="2.5"
            />
          ))}
        </g>
      )}

      {/* STYLE J: BOTANICAL GREENHOUSE (AgriTech Centre) */}
      {building.roofStyle === "botanical-greenhouse" && (
        <g>
          {/* Curved Glass Greenhouse Arches */}
          <path
            d={`M${rLeft.x},${rLeft.y} Q${rBottom.x},${rBottom.y - 36} ${rRight.x},${rRight.y} L${rTop.x},${rTop.y - 20} Z`}
            fill="rgba(134, 239, 172, 0.55)"
            stroke="#15803D"
            strokeWidth="1.8"
          />
          {/* Greenhouse Steel Ribs */}
          <line x1={rLeft.x + 15} y1={rLeft.y - 2} x2={rLeft.x + 25} y2={rLeft.y - 22} stroke="#15803D" strokeWidth="1.2" />
          <line x1={rBottom.x - 10} y1={rBottom.y - 8} x2={rBottom.x} y2={rBottom.y - 30} stroke="#15803D" strokeWidth="1.2" />
          {/* Outdoor Farming Soil Beds */}
          <polygon points={`${gLeft.x - 18},${gLeft.y + 6} ${gLeft.x - 2},${gLeft.y + 12} ${gLeft.x - 8},${gLeft.y + 24} ${gLeft.x - 24},${gLeft.y + 18}`} fill="#78350F" stroke="#451A03" />
          <circle cx={gLeft.x - 12} cy={gLeft.y + 12} r="2.5" fill="#22C55E" />
          <circle cx={gLeft.x - 16} cy={gLeft.y + 18} r="2.5" fill="#84CC16" />
        </g>
      )}

      {/* STYLE K: MARKET AWNINGS (The Eleventh Hour) */}
      {building.roofStyle === "market-awnings" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Striped Fabric Awnings on Left Face */}
          <polygon
            points={`${gLeft.x + 6},${gLeft.y - 28} ${gBottom.x - 4},${gBottom.y - 28} ${gBottom.x - 4},${gBottom.y - 18} ${gLeft.x + 6},${gLeft.y - 18}`}
            fill="#EA580C"
            stroke="#7C2D12"
            strokeWidth="1"
          />
          {/* Awning stripes */}
          <line x1={gLeft.x + 16} y1={gLeft.y - 28} x2={gLeft.x + 16} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />
          <line x1={gLeft.x + 28} y1={gLeft.y - 28} x2={gLeft.x + 28} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />
          <line x1={gLeft.x + 40} y1={gLeft.y - 28} x2={gLeft.x + 40} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />
          {/* Outdoor fruit/bread crates */}
          <rect x={gBottom.x - 16} y={gBottom.y - 10} width="8" height="6" fill="#B45309" stroke="#78350F" />
          <circle cx={gBottom.x - 12} cy={gBottom.y - 11} r="2" fill="#F97316" />
        </g>
      )}

      {/* STYLE L: TOWN GAZEBO (City Connect) */}
      {building.roofStyle === "town-gazebo" && (
        <g>
          {/* Octagonal Pointed Roof with Weather Vane */}
          <polygon
            points={`${rLeft.x + 6},${rLeft.y} ${rBottom.x},${rBottom.y - 28} ${rRight.x - 6},${rRight.y} ${rTop.x},${rTop.y - 14}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="1.8"
          />
          {/* Brass Weather Vane */}
          <line x1={rBottom.x} y1={rBottom.y - 28} x2={rBottom.x} y2={rBottom.y - 44} stroke="#F59E0B" strokeWidth="1.8" />
          <polygon points={`${rBottom.x - 6},${rBottom.y - 44} ${rBottom.x + 6},${rBottom.y - 44} ${rBottom.x},${rBottom.y - 49}`} fill="#F59E0B" />
          {/* Open Gazebo Railing Pillars */}
          <line x1={rLeft.x + 12} y1={rLeft.y + 4} x2={gLeft.x + 12} y2={gLeft.y + 4} stroke="#0D9488" strokeWidth="2.5" />
          <line x1={rBottom.x} y1={rBottom.y} x2={gBottom.x} y2={gBottom.y} stroke="#0D9488" strokeWidth="2.5" />
          <line x1={rRight.x - 12} y1={rRight.y + 4} x2={gRight.x - 12} y2={gRight.y + 4} stroke="#0D9488" strokeWidth="2.5" />
        </g>
      )}

      {/* 6. CONTEXTUAL HOVER / FOCUS LABEL (Shown ONLY on hover or select!) */}
      {isHighlighted && (
        <g
          transform={`translate(${rBottom.x}, ${rTop.y - 32})`}
          className="pointer-events-none animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Tooltip Card Pill */}
          <rect
            x="-75"
            y="-16"
            width="150"
            height="32"
            rx="16"
            fill="#1C1917"
            stroke={p.accent}
            strokeWidth="2"
            filter="drop-shadow(0px 6px 14px rgba(0,0,0,0.45))"
          />

          {/* Pointer Triangle */}
          <polygon points="-6,16 6,16 0,22" fill="#1C1917" />

          {/* Building Name */}
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
            fontFamily="Newsreader, Georgia, serif"
          >
            {building.name.length > 20 ? building.name.slice(0, 19) + "…" : building.name}
          </text>

          {/* Subtitle / Stat */}
          <text
            x="0"
            y="9"
            textAnchor="middle"
            fill="#FEF08A"
            fontSize="8"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            {building.badge || building.statValue}
          </text>
        </g>
      )}
    </g>
  );
};
