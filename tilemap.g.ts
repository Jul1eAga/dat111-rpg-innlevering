// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "fieldLevel":
            case "fieldLevel1":return tiles.createTilemap(hex`1000100006060606060606020306060606060606060606060606060203060606060606060606060606060602030606060606060606060606060606020306060606060606070707070707070203070707070707070505050505050501010505050505050504040404040404010104040404040404060606060606060203060606060606060606060606060602030606060606060606060806060606020306080606060606060606060606060203060606080606060606060608060602030608060806060606080806060606020306060608060806060608080606060203060606080806060606060806060602030606060606060606060606060606020306060606060606`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.skillmap.islandTile4,sprites.builtin.brick,sprites.castle.tileGrass3], TileScale.Sixteen);
            case "shopInterior":
            case "shopInterior1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000308080808080400000000000000000007010101010109000000000000000000070101010101090000000000000000000701010101010900000000000000000007010101010109000000000000000000060a0a010a0a050000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 2 2 2 . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
