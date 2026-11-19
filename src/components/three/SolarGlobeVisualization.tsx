import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe2, MapPin } from 'lucide-react';

interface SolarGlobeProps {
  className?: string;
}

export const SolarGlobeVisualization: React.FC<SolarGlobeProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<string>('Chennai HQ & Industrial Corridor (200 KW)');
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      setIsSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 240;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Globe Base Sphere (Architectural deep forest slate)
    const globeRadius = 75;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 40, 40);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x1E392B,
      emissive: 0x111A14,
      specular: 0xB69B62,
      shininess: 15,
      transparent: true,
      opacity: 0.92,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(globeMesh);

    // 2. Wireframe Engineering Grid
    const wireframeGeo = new THREE.SphereGeometry(globeRadius + 0.2, 24, 24);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x344B36,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    mainGroup.add(wireframeMesh);

    // 3. Project Nodes
    const nodesData = [
      { name: "Chennai HQ & TI Cycle (200 KW)", lat: 13.08, lon: 80.27, size: 2.2, color: 0xB69B62 },
      { name: "Aruppukottai Plant (18 MW)", lat: 9.51, lon: 78.10, size: 2.5, color: 0x344B36 },
      { name: "Karur Power Plant (5 MW)", lat: 10.96, lon: 78.08, size: 2.0, color: 0xB69B62 },
      { name: "TVS Brake Tirunelveli (18 MW)", lat: 8.71, lon: 77.75, size: 2.5, color: 0x344B36 },
      { name: "Dindigul & Amway (15 MW + 750 KW)", lat: 10.36, lon: 77.98, size: 2.2, color: 0xB69B62 },
      { name: "Hospet Plant (15 MW)", lat: 15.27, lon: 76.39, size: 2.4, color: 0x344B36 },
      { name: "CMC Vellore (250 KW)", lat: 12.91, lon: 79.13, size: 1.9, color: 0xB69B62 },
    ];

    const convertGeoToVector = (lat: number, lon: number, radius: number): THREE.Vector3 => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    const nodePositions: THREE.Vector3[] = [];

    nodesData.forEach((node) => {
      const pos = convertGeoToVector(node.lat, node.lon, globeRadius + 0.6);
      nodePositions.push(pos);

      const nodeGeo = new THREE.SphereGeometry(node.size, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: node.color });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      mainGroup.add(nodeMesh);
    });

    // 4. Energy Transmission Arcs
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 75) {
          const p1 = nodePositions[i];
          const p2 = nodePositions[j];
          const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
          const arcAltitude = globeRadius + dist * 0.22;
          mid.normalize().multiplyScalar(arcAltitude);

          const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
          const points = curve.getPoints(24);
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const lineMat = new THREE.LineBasicMaterial({
            color: 0xB69B62,
            transparent: true,
            opacity: 0.4
          });
          const arcLine = new THREE.Line(lineGeo, lineMat);
          mainGroup.add(arcLine);
        }
      }
    }

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xB69B62, 1.8);
    dirLight.position.set(100, 100, 120);
    scene.add(dirLight);

    // Initial orientation
    mainGroup.rotation.y = 4.2;
    mainGroup.rotation.x = 0.35;

    // Interaction handling
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      mainGroup.rotation.y += deltaX * 0.005;
      mainGroup.rotation.x += deltaY * 0.005;

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { isVisible = entry.isIntersecting; });
    }, { threshold: 0.05 });
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      const delta = clock.getDelta();

      if (!isDragging && !prefersReducedMotion) {
        mainGroup.rotation.y += delta * 0.10;
      }

      renderer.render(scene, camera);
    };

    animate();

    let nodeIndex = 0;
    const nodeInterval = setInterval(() => {
      nodeIndex = (nodeIndex + 1) % nodesData.length;
      setActiveNode(nodesData[nodeIndex].name);
    }, 4000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(nodeInterval);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      sphereGeo.dispose();
      sphereMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-[480px] sm:h-[540px] rounded-2xl overflow-hidden border transition-colors bg-brand-beige/30 dark:bg-brand-forestDarkest border-brand-borderLight dark:border-brand-borderDark ${className}`}
    >
      <div className="absolute top-6 left-6 z-10 flex items-center space-x-2.5">
        <span className="w-2 h-2 rounded-full bg-brand-olive dark:bg-brand-gold" />
        <span className="text-xs font-mono uppercase tracking-widest text-brand-slate dark:text-brand-slateLight font-medium">
          Grid Network Synchronization
        </span>
      </div>

      <div className="absolute top-6 right-6 z-10 hidden sm:flex items-center space-x-2 text-xs text-brand-slate dark:text-brand-slateLight bg-brand-white/80 dark:bg-brand-forestDark/80 px-3 py-1.5 rounded-md border border-brand-borderLight dark:border-brand-borderDark">
        <Globe2 className="w-3.5 h-3.5 text-brand-olive dark:text-brand-gold" />
        <span>Rotate View (Drag)</span>
      </div>

      {!isSupported && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <p className="text-sm text-brand-slate">Regional Solar Grid Network Visual</p>
        </div>
      )}

      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y" />

      {/* Floating Active Node Telemetry Card */}
      <div className="absolute bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:max-w-sm z-10 pointer-events-none">
        <div className="bg-brand-white/95 dark:bg-brand-forestDark/95 border border-brand-borderLight dark:border-brand-borderDark rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-brand-olive dark:text-brand-gold font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Active Deployment Hub</span>
          </div>
          <div className="text-sm font-semibold font-display text-brand-charcoal dark:text-brand-white">
            {activeNode}
          </div>
        </div>
      </div>
    </div>
  );
};
