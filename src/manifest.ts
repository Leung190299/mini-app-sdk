import type { ComponentType } from 'react';

/** Native capabilities a mini app may need. The host app must ship the matching native modules. */
export type MiniAppCapability = 'camera' | 'microphone' | 'location' | 'notifications';

export type MiniAppManifest = {
  /** Stable id, unique across mini apps. */
  id: string;
  name: string;
  emoji: string;
  /** Accent / icon background color. */
  color: string;
  /** Usually read from the mini app's own package.json. */
  version: string;
  /** Native capabilities this mini app needs; omit when it is JS-only. */
  requires?: MiniAppCapability[];
  component: ComponentType;
};

export function defineMiniApp(manifest: MiniAppManifest): MiniAppManifest {
  return manifest;
}

/** Capabilities the mini app requires that the host does not provide. Empty means it can run. */
export function getMissingCapabilities(
  manifest: MiniAppManifest,
  available: readonly MiniAppCapability[],
): MiniAppCapability[] {
  return (manifest.requires ?? []).filter((capability) => !available.includes(capability));
}
