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
  timeOfDay = "night",
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
  // Golden warm window glow
  const windowFill = isHighlighted ? "#FFFFFF" : isNight ? "#FDE047" : "#FEF08A";
  const windowGlowFilter = isNight ? "drop-shadow(0 0 6px rgba(253, 224, 71, 0.75))" : undefined;

  return (
    <g
      className="cursor-pointer transition-all duration-200 select-none group"
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
        points={`${gLeft.x - 14},${gLeft.y + 10} ${gBottom.x + 22},${gBottom.y + 14} ${gRight.x + 38},${gRight.y + 8} ${gTop.x + 10},${gTop.y}`}
        fill="rgba(5, 10, 25, 0.45)"
      />

      {/* 2. NIGHT-TIME WARM LIGHT SPILL ON PAVEMENT (From ground floor windows/doors) */}
      <polygon
        points={`${gBottom.x - 25},${gBottom.y + 4} ${gBottom.x + 25},${gBottom.y + 4} ${gBottom.x + 35},${gBottom.y + 24} ${gBottom.x - 35},${gBottom.y + 24}`}
        fill="rgba(253, 224, 71, 0.18)"
        className="pointer-events-none"
      />

      {/* 3. GROUND LOT FOUNDATION PLINTH (Stone or paved curb) */}
      <polygon
        points={`${gTop.x},${gTop.y} ${gRight.x + 4},${gRight.y + 2} ${gBottom.x},${gBottom.y + 4} ${gLeft.x - 4},${gLeft.y + 2}`}
        fill={isNight ? "#1E293B" : "#CBD5E1"}
        stroke={isHighlighted ? p.accent : "rgba(255,255,255,0.12)"}
        strokeWidth={isHighlighted ? 2.5 : 1}
      />

      {/* 4. LEFT FAÇADE WALL (Main illuminated front face) */}
      <polygon
        points={`${gLeft.x},${gLeft.y} ${gBottom.x},${gBottom.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`}
        fill={isNight ? p.wallMain : p.wallMain}
        stroke={isHighlighted ? p.accent : "rgba(0,0,0,0.25)"}
        strokeWidth={isHighlighted ? 2 : 1}
      />

      {/* 5. RIGHT FAÇADE WALL (Soft atmospheric shadow side) */}
      <polygon
        points={`${gBottom.x},${gBottom.y} ${gRight.x},${gRight.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y}`}
        fill={isNight ? p.wallShadow : p.wallShadow}
        stroke={isHighlighted ? p.accent : "rgba(0,0,0,0.25)"}
        strokeWidth={isHighlighted ? 2 : 1}
      />

      {/* ============================================================== */}
      {/* 6. DISTINCT ARCHITECTURAL STYLES & STORYBOOK DETAILS           */}
      {/* ============================================================== */}

      {/* STYLE 1: MY COMFORT HOME (Two-Storey Storybook Cottage) */}
      {building.roofStyle === "comfort-cottage" && (
        <g>
          {/* Main Sloping Terracotta Roof (Pitched Gable) */}
          <polygon
            points={`${rLeft.x - 8},${rLeft.y + 6} ${rBottom.x},${rBottom.y - 38} ${rRight.x + 8},${rRight.y + 6}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="2.5"
          />
          {/* Right Roof Slope in Shadow */}
          <polygon
            points={`${rBottom.x},${rBottom.y - 38} ${rRight.x + 8},${rRight.y + 6} ${rTop.x},${rTop.y - 38}`}
            fill={p.roofShadow}
            stroke={p.roofShadow}
            strokeWidth="1.5"
          />

          {/* Roof Shingle Texture Rows */}
          <line x1={rLeft.x + 10} y1={rLeft.y - 6} x2={rRight.x - 10} y2={rRight.y - 6} stroke="#7F1D1D" strokeWidth="1.2" opacity="0.6" />
          <line x1={rLeft.x + 25} y1={rLeft.y - 18} x2={rRight.x - 25} y2={rRight.y - 18} stroke="#7F1D1D" strokeWidth="1.2" opacity="0.6" />

          {/* Roof Dormer Window (Upper Attic Nook) */}
          <polygon points={`${rBottom.x - 16},${rBottom.y - 12} ${rBottom.x},${rBottom.y - 28} ${rBottom.x + 16},${rBottom.y - 12}`} fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
          <rect x={rBottom.x - 9} y={rBottom.y - 18} width="18" height="14" fill={windowFill} stroke="#78350F" strokeWidth="1.2" rx="2" style={{ filter: windowGlowFilter }} />
          <line x1={rBottom.x} y1={rBottom.y - 18} x2={rBottom.x} y2={rBottom.y - 4} stroke="#78350F" strokeWidth="1" />

          {/* Stone Chimney with Animated Gentle Smoke Puffs */}
          <rect x={rRight.x - 22} y={rTop.y - 52} width="14" height="26" fill="#78716C" stroke="#44403C" strokeWidth="1.5" rx="2" />
          <rect x={rRight.x - 24} y={rTop.y - 55} width="18" height="5" fill="#44403C" rx="1" />
          <circle cx={rRight.x - 15} cy={rTop.y - 62} r="3.5" fill="#F5F5F4" opacity="0.8" className="animate-pulse" />
          <circle cx={rRight.x - 12} cy={rTop.y - 70} r="5" fill="#E7E5E4" opacity="0.6" />
          <circle cx={rRight.x - 8} cy={rTop.y - 79} r="6.5" fill="#D6D3D1" opacity="0.4" />

          {/* Left Wall Storybook Windows (2nd Floor & 1st Floor) with Flower Boxes */}
          {/* Upper Window 1 */}
          <rect x={rLeft.x + 14} y={rLeft.y + 20} width="18" height="24" fill={windowFill} stroke="#78350F" strokeWidth="1.5" rx="3" style={{ filter: windowGlowFilter }} />
          <line x1={rLeft.x + 23} y1={rLeft.y + 20} x2={rLeft.x + 23} y2={rLeft.y + 44} stroke="#78350F" strokeWidth="1.2" />
          <line x1={rLeft.x + 14} y1={rLeft.y + 32} x2={rLeft.x + 32} y2={rLeft.y + 32} stroke="#78350F" strokeWidth="1.2" />
          {/* Flower Box */}
          <rect x={rLeft.x + 12} y={rLeft.y + 44} width="22" height="4" fill="#B45309" rx="1" />
          <circle cx={rLeft.x + 16} cy={rLeft.y + 43} r="2" fill="#F43F5E" />
          <circle cx={rLeft.x + 22} cy={rLeft.y + 43} r="2" fill="#FBBF24" />
          <circle cx={rLeft.x + 28} cy={rLeft.y + 43} r="2" fill="#FB7185" />

          {/* Upper Window 2 */}
          <rect x={rLeft.x + 40} y={rLeft.y + 32} width="18" height="24" fill={windowFill} stroke="#78350F" strokeWidth="1.5" rx="3" style={{ filter: windowGlowFilter }} />
          <line x1={rLeft.x + 49} y1={rLeft.y + 32} x2={rLeft.x + 49} y2={rLeft.y + 56} stroke="#78350F" strokeWidth="1.2" />
          <line x1={rLeft.x + 40} y1={rLeft.y + 44} x2={rLeft.x + 58} y2={rLeft.y + 44} stroke="#78350F" strokeWidth="1.2" />
          {/* Flower Box */}
          <rect x={rLeft.x + 38} y={rLeft.y + 56} width="22" height="4" fill="#B45309" rx="1" />
          <circle cx={rLeft.x + 42} cy={rLeft.y + 55} r="2" fill="#A855F7" />
          <circle cx={rLeft.x + 48} cy={rLeft.y + 55} r="2" fill="#FBBF24" />
          <circle cx={rLeft.x + 54} cy={rLeft.y + 55} r="2" fill="#38BDF8" />

          {/* Lower Ground Floor Windows on Left Face */}
          <rect x={rLeft.x + 18} y={rLeft.y + 60} width="16" height="22" fill={windowFill} stroke="#78350F" strokeWidth="1.5" rx="2" style={{ filter: windowGlowFilter }} />
          <line x1={rLeft.x + 26} y1={rLeft.y + 60} x2={rLeft.x + 26} y2={rLeft.y + 82} stroke="#78350F" />
          <line x1={rLeft.x + 18} y1={rLeft.y + 71} x2={rLeft.x + 34} y2={rLeft.y + 71} stroke="#78350F" />

          {/* Front Porch on Right Wall with Balcony Railings */}
          <polygon
            points={`${gBottom.x + 6},${gBottom.y - 6} ${gBottom.x + 36},${gBottom.y - 18} ${rBottom.x + 36},${rBottom.y + 74} ${rBottom.x + 6},${rBottom.y + 86}`}
            fill="#B91C1C"
            opacity="0.95"
          />
          {/* Porch Columns */}
          <rect x={gBottom.x + 10} y={gBottom.y - 34} width="4" height="28" fill="#78350F" />
          <rect x={gBottom.x + 30} y={gBottom.y - 42} width="4" height="28" fill="#78350F" />
          {/* Front Arched Door with Warm Lantern Glow */}
          <path d={`M${gBottom.x + 16},${gBottom.y - 38} A7,7 0 0,1 ${gBottom.x + 28},${gBottom.y - 38} L${gBottom.x + 28},${gBottom.y - 10} L${gBottom.x + 16},${gBottom.y - 10} Z`} fill="#451A03" stroke="#292524" strokeWidth="1.5" />
          <circle cx={gBottom.x + 19} cy={gBottom.y - 24} r="1.5" fill="#FBBF24" />
          {/* Porch Lantern */}
          <circle cx={gBottom.x + 12} cy={gBottom.y - 32} r="3" fill="#FDE047" style={{ filter: windowGlowFilter }} />

          {/* Garden Fence & Blooming Flower Bed */}
          <line x1={gBottom.x - 20} y1={gBottom.y + 6} x2={gBottom.x - 36} y2={gBottom.y + 20} stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5,3" />
          <circle cx={gBottom.x - 26} cy={gBottom.y + 12} r="3" fill="#F43F5E" />
          <circle cx={gBottom.x - 32} cy={gBottom.y + 16} r="3" fill="#FBBF24" />
          <circle cx={gBottom.x - 22} cy={gBottom.y + 8} r="2.5" fill="#38BDF8" />

          {/* Little Storybook Mailbox on Front Lawn */}
          <rect x={gBottom.x - 14} y={gBottom.y + 16} width="3" height="12" fill="#78350F" rx="1" />
          <rect x={gBottom.x - 18} y={gBottom.y + 10} width="11" height="7" fill="#DC2626" rx="2" />
          <rect x={gBottom.x - 14} y={gBottom.y + 12} width="2" height="4" fill="#FEF08A" />
        </g>
      )}

      {/* STYLE 2: CLASSICAL FINANCIAL EXCHANGE (StockMinds) */}
      {building.roofStyle === "classical-pediment" && (
        <g>
          {/* Flat Classical Entablature Platform */}
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Triangular Portico Pediment with Gold Crest */}
          <polygon points={`${rLeft.x + 6},${rLeft.y - 4} ${rBottom.x},${rBottom.y - 30} ${rRight.x - 6},${rRight.y - 4}`} fill={p.roofShadow} stroke="#047857" strokeWidth="2" />
          <circle cx={rBottom.x} cy={rBottom.y - 14} r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />

          {/* Classical Colonnade Fluted Columns (4 Pillars) */}
          {[0.2, 0.4, 0.6, 0.8].map((pct, i) => {
            const px = rLeft.x + (rBottom.x - rLeft.x) * pct;
            const py = rLeft.y + (rBottom.y - rLeft.y) * pct;
            return <line key={i} x1={px} y1={py} x2={px} y2={py + height * 0.75} stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />;
          })}

          {/* Grand Classical Stone Steps */}
          <polygon points={`${gBottom.x - 22},${gBottom.y + 4} ${gBottom.x + 22},${gBottom.y - 4} ${gBottom.x + 16},${gBottom.y + 16} ${gBottom.x - 28},${gBottom.y + 24}`} fill="#CBD5E1" stroke="#94A3B8" />

          {/* Arched Classical Windows behind colonnade */}
          <path d={`M${rLeft.x + 24},${rLeft.y + 24} A6,6 0 0,1 ${rLeft.x + 36},${rLeft.y + 24} L${rLeft.x + 36},${rLeft.y + 46} L${rLeft.x + 24},${rLeft.y + 46} Z`} fill={windowFill} stroke="#047857" strokeWidth="1" style={{ filter: windowGlowFilter }} />
        </g>
      )}

      {/* STYLE 3: NIQ CORPORATE TOWER (Stepped Headquarters) */}
      {building.roofStyle === "glass-skyscraper" && (
        <g>
          {/* Stepped Upper Penthouse Tier */}
          <polygon
            points={`${rTop.x + 12},${rTop.y - 20} ${rRight.x - 12},${rRight.y - 20} ${rBottom.x},${rBottom.y - 28} ${rLeft.x + 12},${rLeft.y - 20}`}
            fill="#1E40AF"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />
          {/* Executive Helipad with Illuminated Beacon */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 36} rx={width * 0.28} ry={depth * 0.16} fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <text x={rBottom.x} y={rBottom.y - 32} textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold" fontFamily="monospace">
            H
          </text>
          <circle cx={rBottom.x - 22} cy={rBottom.y - 36} r="2" fill="#EF4444" className="animate-ping" />
          <circle cx={rBottom.x + 22} cy={rBottom.y - 36} r="2" fill="#22C55E" />

          {/* Modern Illuminated Curtain-Wall Grid */}
          {Array.from({ length: 5 }).map((_, floor) => {
            const fy = rLeft.y + floor * 24 + 12;
            return (
              <g key={floor}>
                <line
                  x1={rLeft.x + 12}
                  y1={fy}
                  x2={rBottom.x - 8}
                  y2={fy + (rBottom.y - rLeft.y) * 0.72}
                  stroke="#93C5FD"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <rect x={rLeft.x + 22} y={fy + 4} width="16" height="10" fill={windowFill} opacity="0.85" rx="1" style={{ filter: windowGlowFilter }} />
              </g>
            );
          })}
        </g>
      )}

      {/* STYLE 4: FACTSHIELD MEDIA STUDIO (Broadcast Bureau) */}
      {building.roofStyle === "media-studio" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Steel Broadcast Mast Antenna with Warning Beacon */}
          <line x1={rBottom.x} y1={rBottom.y - 10} x2={rBottom.x} y2={rBottom.y - 48} stroke="#818CF8" strokeWidth="2.5" />
          <circle cx={rBottom.x} cy={rBottom.y - 48} r="4" fill="#EF4444" className="animate-ping" />
          <circle cx={rBottom.x} cy={rBottom.y - 48} r="2.5" fill="#F87171" />
          {/* Satellite Dish Receiver */}
          <ellipse cx={rBottom.x - 26} cy={rBottom.y - 18} rx="9" ry="5" fill="#E2E8F0" stroke="#6366F1" strokeWidth="1.5" />

          {/* Glowing News Ticker Ribbon */}
          <polygon
            points={`${rLeft.x + 10},${rLeft.y + 44} ${rBottom.x - 10},${rBottom.y + 44} ${rBottom.x - 10},${rBottom.y + 54} ${rLeft.x + 10},${rLeft.y + 54}`}
            fill="#312E81"
            stroke="#818CF8"
            strokeWidth="1"
          />
          <text x={rLeft.x + 16} y={rLeft.y + 52} fill="#FEF08A" fontSize="7" fontWeight="bold" fontFamily="monospace">
            FACTSHIELD LIVE • 85%
          </text>

          {/* Industrial Loft Multi-Pane Windows */}
          <rect x={rLeft.x + 16} y={rLeft.y + 14} width="36" height="24" fill={windowFill} stroke="#312E81" strokeWidth="1.5" rx="2" style={{ filter: windowGlowFilter }} />
          <line x1={rLeft.x + 34} y1={rLeft.y + 14} x2={rLeft.x + 34} y2={rLeft.y + 38} stroke="#312E81" />
          <line x1={rLeft.x + 16} y1={rLeft.y + 26} x2={rLeft.x + 52} y2={rLeft.y + 26} stroke="#312E81" />
        </g>
      )}

      {/* STYLE 5: SENIORSAATHI CIVIC CARE HUB */}
      {building.roofStyle === "civic-support" && (
        <g>
          {/* Gentle Sloping Gable with Warm Eaves */}
          <polygon
            points={`${rLeft.x - 6},${rLeft.y} ${rBottom.x},${rBottom.y - 24} ${rRight.x + 6},${rRight.y}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="2"
          />
          {/* Welcoming Wide Double Arched Doorway */}
          <path d={`M${gBottom.x - 16},${gBottom.y - 34} A10,10 0 0,1 ${gBottom.x + 6},${gBottom.y - 34} L${gBottom.x + 6},${gBottom.y} L${gBottom.x - 16},${gBottom.y} Z`} fill="#831843" stroke="#4C0519" strokeWidth="1.5" />
          {/* Warm Amber Entrance Lantern */}
          <circle cx={gBottom.x - 20} cy={gBottom.y - 28} r="3.5" fill="#FDE047" style={{ filter: windowGlowFilter }} />

          {/* Accessible Ramp with Wooden Railing */}
          <line x1={gBottom.x + 6} y1={gBottom.y - 4} x2={gBottom.x + 28} y2={gBottom.y + 8} stroke="#FBCFE8" strokeWidth="6" strokeLinecap="round" />
          <line x1={gBottom.x + 6} y1={gBottom.y - 12} x2={gBottom.x + 28} y2={gBottom.y} stroke="#9D174D" strokeWidth="1.5" />

          {/* Rose Garden Bushes */}
          <circle cx={gBottom.x - 26} cy={gBottom.y - 4} r="7" fill="#F43F5E" />
          <circle cx={gBottom.x - 32} cy={gBottom.y - 2} r="5.5" fill="#FB7185" />
          <circle cx={gRight.x + 8} cy={gRight.y + 4} r="8" fill="#F43F5E" />
        </g>
      )}

      {/* STYLE 6: PLANORA AI EVENT ATRIUM (Fairy-Lit Pavilion) */}
      {building.roofStyle === "event-atrium" && (
        <g>
          {/* Champagne & Gold Tiered Glass Skylight Roof */}
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke="#D4AF37" strokeWidth="2" />
          {/* Festoon Fairy String Lights draped across the eaves */}
          <path
            d={`M${rLeft.x},${rLeft.y} Q${(rBottom.x + rLeft.x) / 2},${(rBottom.y + rLeft.y) / 2 + 10} ${rBottom.x},${rBottom.y} Q${(rBottom.x + rRight.x) / 2},${(rBottom.y + rRight.y) / 2 + 10} ${rRight.x},${rRight.y}`}
            fill="none"
            stroke="#FDE047"
            strokeWidth="1.5"
            strokeDasharray="4,5"
            style={{ filter: "drop-shadow(0 0 4px #FDE047)" }}
          />
          {/* Glass Atrium Double Doors */}
          <polygon
            points={`${gBottom.x - 22},${gBottom.y - 38} ${gBottom.x + 22},${gBottom.y - 38} ${gBottom.x + 22},${gBottom.y} ${gBottom.x - 22},${gBottom.y}`}
            fill={windowFill}
            stroke="#D4AF37"
            strokeWidth="1.8"
            style={{ filter: windowGlowFilter }}
          />
          <line x1={gBottom.x} y1={gBottom.y - 38} x2={gBottom.x} y2={gBottom.y} stroke="#78350F" strokeWidth="1.5" />
        </g>
      )}

      {/* STYLE 7: ARCANUM ACADEMY (Red-Brick Clock Tower) */}
      {building.roofStyle === "brick-academy" && (
        <g>
          {/* Steep Gothic Slate Roof */}
          <polygon points={`${rLeft.x - 6},${rLeft.y} ${rBottom.x},${rBottom.y - 28} ${rRight.x + 6},${rRight.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="2" />
          {/* Collegiate Clock Tower */}
          <rect x={rBottom.x - 15} y={rBottom.y - 68} width="30" height="42" fill="#78350F" stroke="#451A03" rx="2" />
          <polygon points={`${rBottom.x - 17},${rBottom.y - 68} ${rBottom.x},${rBottom.y - 92} ${rBottom.x + 17},${rBottom.y - 68}`} fill="#451A03" />
          {/* Glowing Clock Dial Face */}
          <circle cx={rBottom.x} cy={rBottom.y - 50} r="7.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1.2" style={{ filter: windowGlowFilter }} />
          <line x1={rBottom.x} y1={rBottom.y - 50} x2={rBottom.x} y2={rBottom.y - 54} stroke="#451A03" strokeWidth="1.5" />
          <line x1={rBottom.x} y1={rBottom.y - 50} x2={rBottom.x + 3.5} y2={rBottom.y - 50} stroke="#451A03" strokeWidth="1.5" />

          {/* Arched Gothic Stained Windows */}
          <path d={`M${rLeft.x + 20},${rLeft.y + 24} A6,6 0 0,1 ${rLeft.x + 32},${rLeft.y + 24} L${rLeft.x + 32},${rLeft.y + 48} L${rLeft.x + 20},${rLeft.y + 48} Z`} fill={windowFill} stroke="#451A03" strokeWidth="1.2" style={{ filter: windowGlowFilter }} />
        </g>
      )}

      {/* STYLE 8: UNIVERSITY CAMPUS (GNDU Academic Hall) */}
      {building.roofStyle === "collegiate-dome" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.wallShadow} stroke="#94A3B8" />
          {/* Classical Oxidized Copper Dome */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 24} rx={width * 0.32} ry={depth * 0.22} fill={p.roof} stroke={p.roofShadow} strokeWidth="2.5" />
          {/* Lantern Spire */}
          <polygon points={`${rBottom.x - 5},${rBottom.y - 36} ${rBottom.x},${rBottom.y - 48} ${rBottom.x + 5},${rBottom.y - 36}`} fill="#0F766E" />
          <circle cx={rBottom.x} cy={rBottom.y - 48} r="2" fill="#FBBF24" />

          {/* Graduation Steps & Lawn */}
          <polygon points={`${gBottom.x - 22},${gBottom.y} ${gBottom.x + 22},${gBottom.y} ${gBottom.x + 16},${gBottom.y + 18} ${gBottom.x - 28},${gBottom.y + 18}`} fill="#E2E8F0" />
        </g>
      )}

      {/* STYLE 9: HALL OF FAME (Neoclassical Rotunda) */}
      {building.roofStyle === "museum-rotunda" && (
        <g>
          {/* Neoclassical Gilded Rotunda Dome */}
          <ellipse cx={rBottom.x} cy={rBottom.y - 22} rx={width * 0.36} ry={depth * 0.24} fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" style={{ filter: windowGlowFilter }} />
          <circle cx={rBottom.x} cy={rBottom.y - 36} r="4.5" fill="#FEF08A" className="animate-pulse" />

          {/* Statuary Colonnade Pillars with Golden Uplighting */}
          {[0.2, 0.4, 0.6, 0.8].map((pct, i) => (
            <line
              key={i}
              x1={rLeft.x + (rBottom.x - rLeft.x) * pct}
              y1={rLeft.y + (rBottom.y - rLeft.y) * pct + 6}
              x2={rLeft.x + (rBottom.x - rLeft.x) * pct}
              y2={rLeft.y + (rBottom.y - rLeft.y) * pct + 46}
              stroke="#FEF3C7"
              strokeWidth="3"
            />
          ))}
        </g>
      )}

      {/* STYLE 10: BOTANICAL GREENHOUSE (AgriTech Centre) */}
      {building.roofStyle === "botanical-greenhouse" && (
        <g>
          {/* Curved Glass Greenhouse Arches */}
          <path
            d={`M${rLeft.x},${rLeft.y} Q${rBottom.x},${rBottom.y - 38} ${rRight.x},${rRight.y} L${rTop.x},${rTop.y - 20} Z`}
            fill="rgba(134, 239, 172, 0.6)"
            stroke="#15803D"
            strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 6px rgba(134, 239, 172, 0.5))" }}
          />
          {/* Iron Mullion Ribs */}
          <line x1={rLeft.x + 16} y1={rLeft.y - 2} x2={rLeft.x + 28} y2={rLeft.y - 24} stroke="#15803D" strokeWidth="1.5" />
          <line x1={rBottom.x - 12} y1={rBottom.y - 10} x2={rBottom.x} y2={rBottom.y - 32} stroke="#15803D" strokeWidth="1.5" />

          {/* Outdoor Farming Soil Beds with Sprouting Crops */}
          <polygon points={`${gLeft.x - 20},${gLeft.y + 6} ${gLeft.x - 2},${gLeft.y + 14} ${gLeft.x - 8},${gLeft.y + 26} ${gLeft.x - 26},${gLeft.y + 18}`} fill="#78350F" stroke="#451A03" />
          <circle cx={gLeft.x - 14} cy={gLeft.y + 14} r="3" fill="#22C55E" />
          <circle cx={gLeft.x - 18} cy={gLeft.y + 20} r="3" fill="#84CC16" />
        </g>
      )}

      {/* STYLE 11: THE ELEVENTH HOUR (Reference 2 Cozy Nighttime Storefront) */}
      {building.roofStyle === "market-awnings" && (
        <g>
          <polygon points={`${rTop.x},${rTop.y} ${rRight.x},${rRight.y} ${rBottom.x},${rBottom.y} ${rLeft.x},${rLeft.y}`} fill={p.roof} stroke={p.roofShadow} strokeWidth="1.5" />
          {/* Overhanging Striped Canvas Awning */}
          <polygon
            points={`${gLeft.x + 4},${gLeft.y - 32} ${gBottom.x - 4},${gBottom.y - 32} ${gBottom.x - 4},${gBottom.y - 18} ${gLeft.x + 4},${gLeft.y - 18}`}
            fill="#EA580C"
            stroke="#7C2D12"
            strokeWidth="1.5"
          />
          {/* Striped Texture */}
          <line x1={gLeft.x + 14} y1={gLeft.y - 32} x2={gLeft.x + 14} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />
          <line x1={gLeft.x + 26} y1={gLeft.y - 32} x2={gLeft.x + 26} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />
          <line x1={gLeft.x + 38} y1={gLeft.y - 32} x2={gLeft.x + 38} y2={gLeft.y - 18} stroke="#FFFBEB" strokeWidth="3" />

          {/* Glowing Multi-Pane Boutique Showcase Window (Reference 2 style!) */}
          <rect x={gLeft.x + 8} y={gLeft.y - 16} width="42" height="24" fill={windowFill} stroke="#7C2D12" strokeWidth="1.5" rx="2" style={{ filter: windowGlowFilter }} />
          <line x1={gLeft.x + 22} y1={gLeft.y - 16} x2={gLeft.x + 22} y2={gLeft.y + 8} stroke="#7C2D12" />
          <line x1={gLeft.x + 36} y1={gLeft.y - 16} x2={gLeft.x + 36} y2={gLeft.y + 8} stroke="#7C2D12" />

          {/* Illuminated Wooden Signboard */}
          <rect x={gLeft.x + 12} y={gLeft.y - 42} width="36" height="8" fill="#F59E0B" stroke="#B45309" rx="1" style={{ filter: windowGlowFilter }} />
          <text x={gLeft.x + 16} y={gLeft.y - 36} fill="#451A03" fontSize="5" fontWeight="bold" fontFamily="monospace">
            BOUTIQUE
          </text>

          {/* Trailing Ivy & Potted Plants (Reference 2) */}
          <circle cx={gBottom.x - 12} cy={gBottom.y - 4} r="4" fill="#15803D" />
          <circle cx={gBottom.x - 6} cy={gBottom.y - 2} r="3.5" fill="#22C55E" />
          <circle cx={gLeft.x + 2} cy={gLeft.y - 20} r="4.5" fill="#15803D" />
        </g>
      )}

      {/* STYLE 12: TOWN GAZEBO (City Connect) */}
      {building.roofStyle === "town-gazebo" && (
        <g>
          {/* Octagonal Pointed Roof with Brass Weather Vane */}
          <polygon
            points={`${rLeft.x + 6},${rLeft.y} ${rBottom.x},${rBottom.y - 30} ${rRight.x - 6},${rRight.y} ${rTop.x},${rTop.y - 16}`}
            fill={p.roof}
            stroke={p.roofShadow}
            strokeWidth="2"
          />
          {/* Weather Vane */}
          <line x1={rBottom.x} y1={rBottom.y - 30} x2={rBottom.x} y2={rBottom.y - 48} stroke="#F59E0B" strokeWidth="2" />
          <polygon points={`${rBottom.x - 6},${rBottom.y - 48} ${rBottom.x + 6},${rBottom.y - 48} ${rBottom.x},${rBottom.y - 54}`} fill="#F59E0B" />

          {/* Warm Glowing Central Lantern */}
          <circle cx={rBottom.x} cy={rBottom.y - 12} r="5" fill="#FEF08A" style={{ filter: windowGlowFilter }} />

          {/* Open Gazebo Railings */}
          <line x1={rLeft.x + 12} y1={rLeft.y + 4} x2={gLeft.x + 12} y2={gLeft.y + 4} stroke="#0D9488" strokeWidth="2.5" />
          <line x1={rBottom.x} y1={rBottom.y} x2={gBottom.x} y2={gBottom.y} stroke="#0D9488" strokeWidth="2.5" />
          <line x1={rRight.x - 12} y1={rRight.y + 4} x2={gRight.x - 12} y2={gRight.y + 4} stroke="#0D9488" strokeWidth="2.5" />
        </g>
      )}

      {/* ============================================================== */}
      {/* 7. CONTEXTUAL HOVER / FOCUS LABEL                              */}
      {/* ============================================================== */}
      {isHighlighted && (
        <g
          transform={`translate(${rBottom.x}, ${rTop.y - 36})`}
          className="pointer-events-none animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Tooltip Card Pill */}
          <rect
            x="-80"
            y="-18"
            width="160"
            height="36"
            rx="18"
            fill="#0F172A"
            stroke={p.accent}
            strokeWidth="2"
            filter="drop-shadow(0px 8px 20px rgba(0,0,0,0.6))"
          />
          {/* Pointer Triangle */}
          <polygon points="-6,18 6,18 0,24" fill="#0F172A" />

          {/* Building Name */}
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10.5"
            fontWeight="bold"
            fontFamily="Newsreader, Georgia, serif"
          >
            {building.name.length > 22 ? building.name.slice(0, 21) + "…" : building.name}
          </text>

          {/* Subtitle / Stat Badge */}
          <text
            x="0"
            y="10"
            textAnchor="middle"
            fill="#FEF08A"
            fontSize="8.5"
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
