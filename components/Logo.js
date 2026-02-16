export default function Logo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Flame */}
      <path
        d="M50 8 C 42 18, 30 28, 30 45 C 30 62, 38 75, 50 85 C 62 75, 70 62, 70 45 C 70 28, 58 18, 50 8 Z"
        fill="url(#outerFlame)"
        opacity="0.9"
      />
      
      {/* Middle Flame */}
      <path
        d="M50 18 C 45 26, 38 34, 38 46 C 38 58, 44 67, 50 75 C 56 67, 62 58, 62 46 C 62 34, 55 26, 50 18 Z"
        fill="url(#middleFlame)"
      />
      
      {/* Inner Flame */}
      <path
        d="M50 28 C 47 34, 44 39, 44 47 C 44 55, 47 61, 50 66 C 53 61, 56 55, 56 47 C 56 39, 53 34, 50 28 Z"
        fill="url(#innerFlame)"
      />
      
      {/* Core Flame */}
      <path
        d="M50 36 C 48 40, 47 43, 47 47 C 47 51, 48 54, 50 57 C 52 54, 53 51, 53 47 C 53 43, 52 40, 50 36 Z"
        fill="url(#coreFlame)"
      />
      
      {/* Hot Spot */}
      <ellipse cx="50" cy="48" rx="2" ry="3" fill="#FFFFFF" opacity="0.9">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="outerFlame" x1="50" y1="8" x2="50" y2="85">
          <stop offset="0%" stopColor="#FF6B35"/>
          <stop offset="30%" stopColor="#FF4500"/>
          <stop offset="70%" stopColor="#FF6B00"/>
          <stop offset="100%" stopColor="#FF8C00"/>
        </linearGradient>
        
        <linearGradient id="middleFlame" x1="50" y1="18" x2="50" y2="75">
          <stop offset="0%" stopColor="#FF8C00"/>
          <stop offset="40%" stopColor="#FF6B35"/>
          <stop offset="100%" stopColor="#FF4500"/>
        </linearGradient>
        
        <linearGradient id="innerFlame" x1="50" y1="28" x2="50" y2="66">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="50%" stopColor="#FFA500"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </linearGradient>
        
        <linearGradient id="coreFlame" x1="50" y1="36" x2="50" y2="57">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="40%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#FFA500"/>
        </linearGradient>
      </defs>
    </svg>
  )
}