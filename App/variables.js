const prfTexturesPath =
  "https://github.com/zymex22/Project-RimFactory-Revived/raw/master/Textures/";
const prfWikiPath =
  "https://github.com/zymex22/Project-RimFactory-Revived/wiki/";
const rwTexturesPath = "https://rimworldwiki.com/images/";
const rwWikiPath = "https://rimworldwiki.com/wiki/";


//Lists Images of Items and the Corrosponding Wiki Pages
//As the names of the wiki paths are not consistant we need to manually select them
//TODO Maybe add a scaper?
//TODO Autodetect for PRF / own stuff
const itemDict = {
  PRF_MachineFrame_I: {
    src: `${prfTexturesPath}Common/MachineFrameSmall.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#smallm-machine-frame`
  },
  PRF_MachineFrame_II: {
    src: `${prfTexturesPath}Common/MachineFrame.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#medium-machine-frame`
  },
  PRF_MachineFrame_III: {
    src: `${prfTexturesPath}Common/MachineFrameLarge.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#advanced-machine-frame`
  },
  PRF_ElectronicChip_I: {
    src: `${prfTexturesPath}Common/WeakAICore.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#basic-ai-chip`
  },
  PRF_ElectronicChip_II: {
    src: `${prfTexturesPath}Common/AdvancedAICore.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#advanced-ai-core`
  },
  PRF_ElectronicChip_III: {
    src: `${prfTexturesPath}Common/UltraAiCore.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#qubit-processor`
  },
  PRF_DataDisk: {
    src: `${prfTexturesPath}SAL3/datadisk.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#audio-tape-reel`
  },
  PRF_DroneModule: {
    src: `${prfTexturesPath}Common/DroneModule.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#uav-packed`
  },
  PRF_RoboticArm:{
    src: `${prfTexturesPath}Common/RoboticArm.png?raw=true`,
    link: `${prfWikiPath}Construction-and-Crafting-Resources#robotic-arm`
  },
  /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +        RW Base Game
  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  Plasteel: {
    src: `${rwTexturesPath}8/8c/Plasteel_c.png`,
    link: `${rwWikiPath}Plasteel`
  },
  Steel: {
    src: `${rwTexturesPath}4/4d/Steel_b.png`,
    link: `${rwWikiPath}Steel`
  },
  ComponentIndustrial: {
    src: `${rwTexturesPath}4/40/Component.png`,
    link: `${rwWikiPath}Component`
  },
  ComponentSpacer: {
    src: `${rwTexturesPath}d/d6/Advanced_component.png`,
    link: `${rwWikiPath}Advanced_component`
  },
  WoodLog: {
    src: `${rwTexturesPath}d/df/Wood.png`,
    link: `${rwWikiPath}Wood`
  },
  Gold: {
    src: `${rwTexturesPath}1/10/Gold.png`,
    link: `${rwWikiPath}Gold`
  },
  Uranium: {
    src: `${rwTexturesPath}3/31/Uranium.png`,
    link: `${rwWikiPath}Uranium`
  },
  Hay: {
    src: `${rwTexturesPath}2/25/Hay_a.png`,
    link: `${rwWikiPath}Hay`
  },
  AIPersonaCore: {
    src: `${rwTexturesPath}f/f2/AI_persona_core.png`,
    link: `${rwWikiPath}AI_persona_core`
  },
  Silver:{
    src: `${rwTexturesPath}5/57/Silver_c.png`,
    link: `${rwWikiPath}Silver`
  }
};

module.exports = {
  prfTexturesPath,
  prfWikiPath,
  rwTexturesPath,
  rwWikiPath,
  itemDict
};
