export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;

export const MAX_CANVAS_WIDTH = 1920;
export const MAX_CANVAS_HEIGHT = 1080;

export const MAP_NUM_OF_COLUMNS = 24;
export const MAP_NUM_OF_ROWS = 24;
export const MAP_TILE_SIZE = 64;

//export const PORTRAIT_IMAGE_PX = 500;
//export const PORTRAIT_IMAGE_SCALE_PX = 150;


/** INTRO SCREENS */
export const INTRO_SCREEN_SLEEP = 100; //3000

export const PORTRAIT_WH = 500;

/** SELECTION SCREEN */
export const SELECTION_RECTANGLE_ANCHOR_X = 15;
export const SELECTION_RECTANGLE_ANCHOR_Y = 10;
export const SELECTION_RECTANGLE_SPACING_X = 18;
export const SELECTION_RECTANGLE_SPACING_Y = 80;
export const SELECTION_RECTANGLE_LINE_SIZE = 3;

export const SELECTION_PORTRAIT_IMAGE_PX = 500;
export const SELECTION_PORTRAIT_IMAGE_SCALE_PX = 164;
export const SELECTION_PORTRAIT_MARGIN_XY = 5;

export const SELECTION_PIXEL_XY = 128;
export const SELECTION_PIXEL_MARGIN_Y = 170;

export const SELECTION_MARGIN_X = 15;
export const SELECTION_MARGIN_Y = 10;

export const SELECTION_TEXT_MARGIN_X = 25;
export const SELECTION_TEXT_MARGIN_Y = 360;

export const SELECTION_TEXT_TYPE_MARGIN_X = 25;
export const SELECTION_TEXT_TYPE_MARGIN_Y = 410;

/** BATTLE SCREEN */
export const BATTLE_ANCHOR_X = 70;
export const BATTLE_ANCHOR_Y = 70;

/** OpponentPixelAnimation */
export const BATTLE_CAT_PIXEL_IX = 32;
export const BATTLE_CAT_PIXEL_IY = 192;
export const BATTLE_CAT_PIXEL_WH = 160;
export const BATTLE_CAT_PIXEL_X = 200;
export const BATTLE_CAT_PIXEL_Y = 120;
export const BATTLE_CAT_PIXEL_SWSH = 256;

export const BATTLE_OPPONENT_PIXEL_IXIY = 0;
export const BATTLE_OPPONENT_PIXEL_WH = 16;
export const BATTLE_OPPONENT_PIXEL_Y = 220;
export const BATTLE_OPPONENT_PIXEL_SWSH = 64;


export const BATTLE_OPPONENT_ATTACK_X = BATTLE_ANCHOR_X + (PORTRAIT_WH / 2) + 50;

/** CatAttackDamageText / OpponentAttackDamageText */
export const BATTLE_ATTACK_DAMAGE_TEXT_Y = 120;
export const BATTLE_OPPONENT_ATTACK_DAMAGE_TEXT_X = BATTLE_ANCHOR_X + PORTRAIT_WH;

export const BATTLE_CAT_HP_TEXT_XY = BATTLE_ANCHOR_X + 30;

export const BATTLE_STATE_CAT_FORWARD_Y = BATTLE_CAT_PIXEL_Y - 150;

export const BATTLE_PIXEL_SPEED_10 = 10;
export const BATTLE_PIXEL_SPEED_15 = 15;
export const BATTLE_PIXEL_SPEED_20 = 20;
export const BATTLE_PIXEL_SPEED_25 = 25;
export const BATTLE_PIXEL_SPEED_30 = 30;

export const BATTLE_RECTANGLE_SIZE = 7;
export const BATTLE_RECTANGLE_CAT_COLOR = "blue";
export const BATTLE_RECTANGLE_OPPONENT_COLOR = "red";
export const BATTLE_RECTANGLE_SWSH = PORTRAIT_WH + 5;
export const BATTLE_RECTANGLE_Y = 427.5;


export const BATTLE_CLAW_SYMBOL_WIDTH = 150;
export const BATTLE_CLAW_SYMBOL_HEIGHT = 150;
export const BATTLE_POUNCE_SYMBOL_WIDTH = 320;
export const BATTLE_POUNCE_SYMBOL_HEIGHT = 320;
export const BATTLE_BITE_SYMBOL_WIDTH = 150;
export const BATTLE_BITE_SYMBOL_HEIGHT = 150;
export const BATTLE_PUFF_SYMBOL_WIDTH = 200;
export const BATTLE_PUFF_SYMBOL_HEIGHT = 200;



export const BATTLE_PORTRAIT_Y = 425;
export const BATTLE_PORTRAIT_CAT_X = BATTLE_ANCHOR_X - 2.5;
export const BATTLE_PORTRAIT_OPPONENT_X = BATTLE_ANCHOR_X + PORTRAIT_WH + 3.5;


/** World */
export const WORLD_CAT_HP_TEXT_X = 200;
export const WORLD_CAT_HP_TEXT_Y = 45;

export const WORLD_HEART_X = 65;
export const WORLD_HEART_Y = 5;

export const WORLD_CAT_LEVEL_TEXT_X = 400;
export const WORLD_CAT_LEVEL_TEXT_Y = 45;

export const WORLD_CAT_NAME_TEXT_X = 560;
export const WORLD_CAT_NAME_TEXT_Y = 45;


export const CANVAS_PIXEL_MIDDLE_X = (CANVAS_WIDTH - SELECTION_PIXEL_XY) / 2;
export const CANVAS_PIXEL_MIDDLE_Y = (CANVAS_HEIGHT - SELECTION_PIXEL_XY) / 2;

export const SELECTION_COLUMN_SPACING = (CANVAS_WIDTH - SELECTION_MARGIN_X) / 5;
export const SELECTION_ROW_SPACING = (CANVAS_HEIGHT - SELECTION_MARGIN_Y) / 2;

export const BATTLE_PIXEL_OPPONENT_X = CANVAS_WIDTH - 500 - 50;


export const SLEEP_BETWEEN_SCREENS = 200;


export const BATTLE_BUTTON_OUTLINE_COLOR = "purple";





export const TITLE_SCREEN_WAIT_TICKS = 10;
export const RACHEL_SCREEN_WAIT_TICKS = 20;
export const NATHAN_SCREEN_WAIT_TICKS = 20;
export const DAD_SCREEN_WAIT_TICKS = 20;
export const MOM_SCREEN_WAIT_TICKS = 20;


export const PIXEL_MARGIN_IMAGE_XY = 32;
export const SELECTION_PIXEL_LEFT_PAD_X = 30;

export const SELECTION_COLOR = "blue";

export const PORTRAIT_DRAWING_XY = 500;
export const PORTRAIT_DRAWING_SCALED_XY = 150;

/** FONT OPTIONS -> Only ONE type of font per screen. Multiple sizes is OK. */
export const SELECTION_SCREEN_FONT_22 = "22pt 'Helvetica', 'sans-serif'";
export const SELECTION_SCREEN_FONT_30 = "30pt 'Helvetica', 'sans-serif'";
export const WORLD_SCREEN_FONT_30 = "30pt 'Helvetica', 'sans-serif'";
export const WORLD_SCREEN_FONT_BOLD_30 = "bold 30pt 'Helvetica', 'sans-serif'";
export const BATTLE_SCREEN_FONT = "72pt 'Helvetica', 'sans-serif'";

//export const WORLD_SCREEN_FONT_BOLD_30 = "bold 30pt Comic Sans MS";
//export const FONT_30_COMIC = "30pt bold italic 'Comic Sans MS', 'Comic Sans', 'cursive'";
//export const FONT_30_SANS_SERIF = "30pt 'Helvetica', 'sans-serif'";
//export const FONT_30_MONOSPACE = "30pt 'Courier New', 'monospace'";
//export const FONT_22_COMIC = "22pt 'Comic Sans MS', 'Comic Sans', 'cursive'";

export const COLOR_PURPLE = "purple";
export const COLOR_ORANGE = "orange";
export const COLOR_RED = "red";
export const COLOR_BLACK = "black";
export const COLOR_WHITE = "white";
export const COLOR_GREEN = "green";
export const COLOR_BLUE = "blue";