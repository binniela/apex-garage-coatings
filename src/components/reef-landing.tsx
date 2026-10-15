"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  Activity,
  ArrowUpRight,
  Bell,
  Droplets,
  Fish,
  Gauge,
  Info,
  SlidersHorizontal,
  Thermometer,
  Waves,
  Wifi,
  X,
} from "lucide-react";

const storySlides = [
  {
    eyebrow: "Aquariums are living systems.",
    title: "Your tank has a pulse. Reef lets you feel it.",
    body: "A soft clip-on sensor reads water conditions, lighting rhythm, and feeding patterns without disturbing the glass.",
    icon: Waves,
  },
  {
    eyebrow: "Less guessing, more noticing.",
    title: "However, tiny changes can move faster than we do.",
    body: "Reef watches the quiet shifts in temperature, pH, salinity, and water clarity so the tank feels calm every day.",
    icon: Gauge,
  },
  {
    eyebrow: "Designed for daily care.",
    title: "Know what your fish need before they have to show you.",
    body: "The companion UI turns tank health into a clean daily score, trend lines, and gentle alerts that make maintenance simple.",
    icon: Fish,
  },
];

const stats = [
  { label: "Temp", value: "78.4", unit: "F", icon: Thermometer },
  { label: "pH", value: "8.1", unit: "", icon: Droplets },
  { label: "Clarity", value: "96", unit: "%", icon: Activity },
  { label: "Link", value: "Live", unit: "", icon: Wifi },
];

const featureCards = [
  {
    title: "Water intelligence",
    text: "Track temperature, pH, salinity, clarity, and change velocity from one calm dashboard.",
    icon: Droplets,
  },
  {
    title: "Light rhythm",
    text: "Match sunrise, moonlight, coral-safe brightness, and feeding cues to your tank's routine.",
    icon: SlidersHorizontal,
  },
  {
    title: "Care alerts",
    text: "Get early, plain-English notifications when the aquarium drifts out of its healthy range.",
    icon: Bell,
  },
];

function makeWoodTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, "#3a251a");
  gradient.addColorStop(0.35, "#8a6044");
  gradient.addColorStop(0.62, "#2d1a12");
  gradient.addColorStop(1, "#6b422d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 70; i += 1) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${80 + (i % 5) * 24}, ${46 + (i % 7) * 9}, ${24 + (i % 3) * 13}, 0.28)`;
    ctx.lineWidth = 1 + (i % 4);
    const y = i * 8 + Math.sin(i) * 18;
    ctx.moveTo(-30, y);
    ctx.bezierCurveTo(140, y + Math.sin(i * 0.8) * 28, 320, y - 36, 542, y + Math.cos(i) * 20);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.1, 1.1);
  return texture;
}

function ReefThreeDevice({ mode = "hero" }: { mode?: "hero" | "feature" | "card" }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || useFallback) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, mode === "hero" ? 1.2 : 1.05, mode === "card" ? 7.4 : 8.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      setUseFallback(true);
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const woodTexture = makeWoodTexture();
    const wood = new THREE.MeshStandardMaterial({
      color: "#5b3624",
      map: woodTexture ?? undefined,
      roughness: 0.46,
      metalness: 0.08,
    });
    const darkWood = new THREE.MeshStandardMaterial({ color: "#2b1711", roughness: 0.52, metalness: 0.16 });
    const glow = new THREE.MeshPhysicalMaterial({
      color: "#76d8d0",
      emissive: "#58d8cd",
      emissiveIntensity: 0.74,
      roughness: 0.18,
      metalness: 0.02,
      transmission: 0.38,
      transparent: true,
      opacity: 0.8,
    });
    const sensor = new THREE.MeshStandardMaterial({ color: "#141615", roughness: 0.36, metalness: 0.55 });
    const rubber = new THREE.MeshStandardMaterial({ color: "#091513", roughness: 0.44, metalness: 0.42 });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.02, 4.9, 96, 1, false, 0.15, Math.PI * 1.7), wood);
    body.position.y = -0.25;
    group.add(body);

    const innerGlow = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 4.72, 96, 1, false, -0.18, Math.PI * 1.04), glow);
    innerGlow.position.set(0.08, -0.28, 0.1);
    group.add(innerGlow);

    const leftLight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 4.05, 0.08), glow);
    leftLight.position.set(-0.73, -0.38, 0.88);
    leftLight.rotation.z = -0.01;
    group.add(leftLight);

    const rightLight = leftLight.clone();
    rightLight.position.x = 0.73;
    group.add(rightLight);

    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.13, 0.34, 128), wood);
    top.position.y = 2.32;
    group.add(top);

    const topLip = new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.08, 18, 128), darkWood);
    topLip.position.y = 2.51;
    topLip.rotation.x = Math.PI / 2;
    group.add(topLip);

    const bottom = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.06, 0.22, 96), rubber);
    bottom.position.y = -2.76;
    group.add(bottom);

    const sensorBack = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 2.12, 16, 24), rubber);
    sensorBack.position.set(0, -0.82, 1.05);
    group.add(sensorBack);

    const sensorFace = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 1.92, 12, 20), sensor);
    sensorFace.position.set(0, -0.82, 1.11);
    group.add(sensorFace);

    for (let i = 0; i < 17; i += 1) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.012, 0.018), new THREE.MeshStandardMaterial({ color: "#6f7770", roughness: 0.5, metalness: 0.24 }));
      fin.position.set(0, -1.72 + i * 0.105, 1.235);
      group.add(fin);
    }

    const rimLight = new THREE.PointLight("#a7fff3", 4.4, 7);
    rimLight.position.set(-2.7, 1.2, 3.8);
    scene.add(rimLight);
    const warmLight = new THREE.PointLight("#ffd493", 2.5, 8);
    warmLight.position.set(2.2, 3.4, 4.4);
    scene.add(warmLight);
    const keyLight = new THREE.DirectionalLight("#fff5df", 3.6);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);
    scene.add(new THREE.AmbientLight("#effffb", 0.95));

    group.rotation.set(-0.08, mode === "hero" ? -0.18 : -0.12, 0);
    group.scale.setScalar(mode === "card" ? 0.88 : 1);

    let frame = 0;
    let animationId = 0;
    const resize = () => {
      const rect = mount.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      frame += 0.012;
      group.rotation.y = (mode === "hero" ? -0.18 : -0.12) + Math.sin(frame) * 0.035;
      group.position.y = Math.sin(frame * 0.8) * 0.035;
      innerGlow.material.emissiveIntensity = 0.65 + Math.sin(frame * 2.2) * 0.08;
      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
      renderer.dispose();
      woodTexture?.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
    };
  }, [mode, useFallback]);

  if (useFallback) {
    return (
      <div className={`reef-three reef-three--${mode} reef-three--fallback`} aria-label="Render of Reef smart aquarium attachment">
        <div className="reef-device" aria-hidden="true">
          <div className="reef-device__clamp" />
          <div className="reef-device__glass" />
          <div className="reef-device__sensor">
            <span />
          </div>
          <div className="reef-device__light reef-device__light--left" />
          <div className="reef-device__light reef-device__light--right" />
          <div className="reef-device__wake" />
        </div>
      </div>
    );
  }

  return <div className={`reef-three reef-three--${mode}`} ref={mountRef} aria-label="3D render of Reef smart aquarium attachment" />;
}

function ReefLogo() {
  return (
    <span className="reef-logo" aria-label="Reef">
      REEF
    </span>
  );
}

export function ReefLanding() {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let progress = 0;
    const loadInterval = window.setInterval(() => {
      progress = Math.min(100, progress + Math.ceil((100 - progress) / 9));
      setLoadProgress(progress);
      if (progress >= 100) {
        window.clearInterval(loadInterval);
        setLoaded(true);
      }
    }, 62);
    const modalTimer = window.setTimeout(() => setShowModal(true), 9200);

    const onScroll = () => {
      const section = document.getElementById("story");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)));
      setActiveSlide(Math.min(storySlides.length - 1, Math.floor(progress * storySlides.length)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearInterval(loadInterval);
      window.clearTimeout(modalTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ActiveIcon = useMemo(() => storySlides[activeSlide].icon, [activeSlide]);

  return (
    <main className={`reef-site ${loaded ? "reef-site--loaded" : ""}`}>
      {!loaded ? (
        <div className="reef-loader" aria-hidden="true">
          <div className="reef-loader__brand">REEF</div>
          <div className="reef-loader__count">{String(loadProgress).padStart(3, "0")}%</div>
          <div className="reef-loader__line" />
          <div className="reef-loader__bar">
            <span style={{ transform: `scaleX(${loadProgress / 100})` }} />
          </div>
        </div>
      ) : null}

      <header className="reef-nav">
        <a href="#top" className="reef-nav__brand">
          <ReefLogo />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#water">Water Tracking</a>
          <a href="#app">Smart UI</a>
          <a href="#company">Company</a>
          <a href="#help">Help Center</a>
        </nav>
        <a className="reef-pill" href="#preorder">
          <span>Pre-Order Now</span>
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="reef-hero">
        <img className="reef-hero__media" src="/images/reef/aquarium-plants.jpg" alt="" />
        <div className="reef-hero__shade" />
        <div className="reef-hero__grid">
          <h1>
            REEF<span>ONE</span>
          </h1>
          <p className="reef-hero__tag">• Aquarium health, beautifully visible</p>
          <div className="reef-hero__badges" aria-label="Reef One capabilities">
            <span>
              <Droplets size={22} /> Water chemistry
            </span>
            <span>
              <Activity size={22} /> Tank trends
            </span>
            <span>
              <Bell size={22} /> Care alerts
            </span>
          </div>
          <div className="reef-hero__device">
            <ReefThreeDevice mode="hero" />
          </div>
          <p className="reef-hero__headline">Smart aquarium care, beautifully visible.</p>
          <p className="reef-hero__scroll">SCROLL DOWN</p>
          <p className="reef-hero__mark">• REEF</p>
          <p className="reef-hero__year">© 2026</p>
        </div>
      </section>

      <section id="story" className="reef-story">
        <img className="reef-story__media" src="/images/reef/coral-reef.jpg" alt="" />
        <div className="reef-story__shade" />
        <div className="reef-story__inner">
          <div className="reef-story__copy" key={storySlides[activeSlide].title}>
            <p>{storySlides[activeSlide].eyebrow}</p>
            <h2>{storySlides[activeSlide].title}</h2>
          </div>
          <aside className="reef-story__card" key={storySlides[activeSlide].body}>
            <span>
              <ActiveIcon size={34} />
            </span>
            <p>{storySlides[activeSlide].body}</p>
          </aside>
        </div>
      </section>

      <section id="features" className="reef-product">
        <div className="reef-product__device">
          <ReefThreeDevice mode="feature" />
          <div className="reef-callout-dot" />
        </div>
        <div className="reef-product__panel">
          <span>
            <SlidersHorizontal size={30} />
          </span>
          <h2>Clip on. Tune in.</h2>
          <p>
            Reef mounts cleanly to aquarium glass and streams the tank&apos;s most important signals into a calm,
            glanceable interface.
          </p>
        </div>
      </section>

      <section id="water" className="reef-dashboard">
        <div className="reef-dashboard__phone">
          <div className="reef-dashboard__screen">
            <div className="reef-dashboard__top">
              <span>Tank Health</span>
              <strong>Excellent</strong>
            </div>
            <div className="reef-score">
              <span>94</span>
              <p>Stable reef range</p>
            </div>
            <div className="reef-wave-chart" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="reef-stat-grid">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label}>
                    <Icon size={19} />
                    <small>{stat.label}</small>
                    <strong>
                      {stat.value}
                      <em>{stat.unit}</em>
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="reef-dashboard__copy">
          <p>Smart UI</p>
          <h2>Every reading becomes something you can actually act on.</h2>
          <div className="reef-feature-list">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title}>
                  <Icon size={28} />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="preorder" className="reef-preorder">
        <img className="reef-preorder__media" src="/images/reef/aquascape-wide.jpg" alt="" />
        <div className="reef-preorder__panel">
          <div className="reef-preorder__image">
            <ReefThreeDevice mode="card" />
          </div>
          <div className="reef-preorder__copy">
            <span>
              <Fish size={34} />
            </span>
            <h2>Pre-Order Now</h2>
            <p>
              Be among the first to attach Reef One to your aquarium. Early units include the Reef app,
              glass-safe mount, calibration kit, and care profile setup.
            </p>
            <div className="reef-preorder__row">
              <span>Reef One price: $399</span>
              <strong>Due Today: $49</strong>
              <Info size={22} />
            </div>
            <div className="reef-swatches" aria-label="Finish options">
              <button className="is-active" type="button">
                <span style={{ background: "#132827" }} />
                Abyss / Copper
              </button>
              <button type="button">
                <span style={{ background: "#e6eee6" }} />
                Pearl / Steel
              </button>
              <button type="button">
                <span style={{ background: "#6f998f" }} />
                Kelp / Graphite
              </button>
            </div>
            <button className="reef-order-button" type="button" onClick={() => setShowModal(true)}>
              <span>Pre-Order Now</span>
              <ArrowUpRight size={22} />
            </button>
            <small>By clicking &quot;Pre-Order Now&quot; you agree to the terms and privacy policy.</small>
          </div>
        </div>
      </section>

      <footer id="company" className="reef-footer">
        <div>
          <p>INSIDER CIRCLE</p>
          <ReefLogo />
          <span>Sign up and receive tank care updates and launch offers.</span>
          <label htmlFor="footer-email">Email</label>
          <input id="footer-email" type="email" />
          <button type="button">
            <span>Become a member</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
        <div>
          <p>CONTACT</p>
          <a href="mailto:hello@reef.tank">hello@reef.tank</a>
        </div>
        <div id="help">
          <p>INFORMATION</p>
          <a href="#features">Features</a>
          <a href="#water">Water Tracking</a>
          <a href="#app">Smart UI</a>
          <a href="#preorder">Pre-Order</a>
          <a href="#help">Help Center</a>
        </div>
        <div>
          <p>SOCIAL MEDIA</p>
          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">Pinterest</a>
          <a href="/">X</a>
        </div>
        <small>© 2026. REEF. ALL RIGHT RESERVED</small>
        <small>TERMS, PRIVACY POLICY, COOKIES POLICY</small>
        <small>WEBSITE BY REEF</small>
      </footer>

      {showModal ? (
        <div className="reef-modal" role="dialog" aria-modal="true" aria-labelledby="reef-modal-title">
          <div className="reef-modal__backdrop" onClick={() => setShowModal(false)} />
          <div className="reef-modal__panel">
            <div className="reef-modal__image">
              <ReefThreeDevice mode="card" />
            </div>
            <div className="reef-modal__copy">
              <button className="reef-modal__close" type="button" onClick={() => setShowModal(false)} aria-label="Close">
                <X size={32} />
              </button>
              <h2 id="reef-modal-title">Join our Insider Circle</h2>
              <mark>members only</mark>
              <p>
                Become a member of our early access community to get launch pricing, reef-care templates, and a
                personal setup walkthrough.
              </p>
              <input type="email" placeholder="Email" aria-label="Email" />
              <button type="button">Get my exclusive offer</button>
              <small>By continuing, you accept our privacy policy and agree to receive email marketing.</small>
              <a href="/" onClick={(event) => event.preventDefault()}>
                No, thanks
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
