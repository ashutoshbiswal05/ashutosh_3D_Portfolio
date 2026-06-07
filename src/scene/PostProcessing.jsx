import { EffectComposer, Bloom, Vignette, Noise, Outline } from "@react-three/postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <Vignette
        eskil={false}
        offset={0.15}
        darkness={0.25}
      />

      <Noise opacity={0.015} />

      <Outline
        edgeStrength={8}
        visibleEdgeColor="#66bbff"
        hiddenEdgeColor="#66bbff"
        blur
      />
    </EffectComposer>
  );
}