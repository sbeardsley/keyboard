import {
  hyperLayer,
  ifApp,
  map,
  rule,
  withCondition,
  writeToProfile,
} from "karabiner.ts";

writeToProfile("Main", [
  // It is not required, but recommended to put symbol alias to layers,
  // (If you type fast, use simlayer instead, see https://evan-liu.github.io/karabiner.ts/rules/simlayer)
  // to make it easier to write '←' instead of 'left_arrow'.
  // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts
  rule("Hyper Key (⌃⌥⇧⌘)").manipulators([
      map("caps_lock").to("<⇧", "<⌘⌥⌃").toIfAlone("escape"), // capslock = esc(click) | hyper(hold)
      // map("escape", ">⌘⌥⌃⇧", "caps_lock").toHyper(), //escape = capslock switch (enables hyper key)
  ]), // set caps lock as hyper key

  rule("BOTH Shift to capslock").manipulators([
    map("left_shift", "right_shift", "caps_lock")
      .to("caps_lock")
      .toIfAlone("left_shift"),
    map("right_shift", "left_shift", "caps_lock")
      .to("caps_lock")
      .toIfAlone("right_shift"),
  ]),

  rule("emoji keyboard").manipulators([
    map("spacebar", "<⌘⌥⌃⇧").to("spacebar", "<⌘⌃"),
  ]),

  rule(
    "Default Function Keys",
    ifApp("com.microsoft.VSCode").unless(),
    ifApp("com.google.Chrome").unless()
  ).manipulators([
    map("f1").toConsumerKey("display_brightness_decrement"),
    map("f2").toConsumerKey("display_brightness_increment"),
    map("f3").to("mission_control"),
    map("f4").to("launchpad"),
    map("f7").toConsumerKey("rewind"),
    map("f8").toConsumerKey("play_or_pause"),
    map("f9").toConsumerKey("fast_forward"),
    map("f10").toConsumerKey("mute"),
    map("f11").toConsumerKey("volume_decrement"),
    map("f12").toConsumerKey("volume_increment"),
  ]),

  rule("Hyper Function Keys - Per App").manipulators([
    withCondition(ifApp("com.microsoft.VSCode"))([
      map("f1", "<⌘⌥⌃⇧").toConsumerKey("display_brightness_decrement"),
      map("f2", "<⌘⌥⌃⇧").toConsumerKey("display_brightness_increment"),
      map("f3", "<⌘⌥⌃⇧").to("mission_control"),
      map("f4", "<⌘⌥⌃⇧").to("launchpad"),
      map("f7", "<⌘⌥⌃⇧").toConsumerKey("rewind"),
      map("f8", "<⌘⌥⌃⇧").toConsumerKey("play_or_pause"),
      map("f9", "<⌘⌥⌃⇧").toConsumerKey("fast_forward"),
      map("f10", "<⌘⌥⌃⇧").toConsumerKey("mute"),
      map("f11", "<⌘⌥⌃⇧").toConsumerKey("volume_decrement"),
      map("f12", "<⌘⌥⌃⇧").toConsumerKey("volume_increment"),
    ]),
    withCondition(ifApp("com.google.Chrome"))([
      map("f1", "<⌘⌥⌃⇧").toConsumerKey("display_brightness_decrement"),
      map("f2", "<⌘⌥⌃⇧").toConsumerKey("display_brightness_increment"),
      map("f3", "<⌘⌥⌃⇧").to("mission_control"),
      map("f4", "<⌘⌥⌃⇧").to("launchpad"),
      map("f7", "<⌘⌥⌃⇧").toConsumerKey("rewind"),
      map("f8", "<⌘⌥⌃⇧").toConsumerKey("play_or_pause"),
      map("f9", "<⌘⌥⌃⇧").toConsumerKey("fast_forward"),
      map("f10", "<⌘⌥⌃⇧").toConsumerKey("mute"),
      map("f11", "<⌘⌥⌃⇧").toConsumerKey("volume_decrement"),
      map("f12", "<⌘⌥⌃⇧").toConsumerKey("volume_increment"),
    ]),
  ]),

  //system layer
  // hyperLayer("s", "hyper-s").manipulators([map(1).to(2)]),

  //Developer layer
  // hyperLayer("d", "hyper-d").manipulators([]),

  //window layer
  hyperLayer("w", "hyper-w").manipulators([
    // 4-corners [u,i,j,k]
    map("u").to("u", ">⌥⌃").description("Window: Upper Left Quadrant"),
    map("i").to("i", ">⌥⌃").description("Window: Upper Right Quadrant"),
    map("j").to("j", ">⌥⌃").description("Window: Lower Left Quadrant"),
    map("k").to("k", ">⌥⌃").description("Window: Lower Right Quadrant"),
    // Thirds [y,o,p]
    map("y").to("d", ">⌥⌃").description("Window: Left Third"),
    map("o").to("f", ">⌥⌃").description("Window: Center Third"),
    map("p").to("g", ">⌥⌃").description("Window: Right Third"),
    // 2-Thirds [h,l]
    map("h").to("e", ">⌥⌃").description("Window: Center Third"),
    map("l").to("t", ">⌥⌃").description("Window: Right Third"),
    // Halfs
    map("up_arrow").to("up_arrow", ">⌥⌃").description("Window: Top Half"), // Top Half
    map("down_arrow")
      .to("down_arrow", ">⌥⌃")
      .description("Window: Bottom Half"), // Bottom Half
    map("left_arrow").to("left_arrow", ">⌥⌃").description("Window: Left Half"), // Left Half
    map("right_arrow")
      .to("right_arrow", ">⌥⌃")
      .description("Window: Right Half"), //Right Half

    //Full Screen and Restore
    map("⏎").to("⏎", ">⌥⌃").description("Window: Full Screen"), // Full Screen (Magnet App)
    map("⌫").to("⌫", ">⌥⌃").description("Window: Restore"), // Restore Window (Magnet App)
    map("c").to("c", ">⌥⌃").description("Window: Center"), //Center Window (Magnet App)

    //Tabs
    map("[").to("tab", "<⌃⇧").description("Tabs: Previous Tab"),
    map("]").to("tab", "<⌃").description("Tabs: Next Tab"),
  ]),

  //open layer
  hyperLayer("o", "hyper-o").manipulators([
    map("g").toApp("Google Chrome"),
    map("v").toApp("Visual Studio Code"),
    map("s").toApp("Slack"),
    map("i").toApp("iTerm"),
    map("t").toApp("Microsoft Teams classic"),
    map("1").toApp("1Password"),
    map("d").toApp("Azure Data Studio"),
    map("m").toApp("Messages"),
    map("z").toApp("zoom.us"),
  ]),
]);
