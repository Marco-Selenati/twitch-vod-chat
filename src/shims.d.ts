import VODPlayer from "./vodplayer";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $root: ({ vp: VODPlayer } & ComponentPublicInstance) | null;
  }
}
