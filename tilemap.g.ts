// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000101010101010101010101000000000000000000`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0], TileScale.Sixteen);
            case "level_1":
            case "level_1":return tiles.createTilemap(hex`140008000708080809050507080808080808080808080203020206020a08080b0202020c0b020202020e020302060202020c0b020205070b02070808080b020307020207080b020202070e02020c060b020207030c0808060202070808060608080b0202050706030c060e020708060e0202020202020708080b02030a0b02070b02020a08080808080806060b0202030101010d01010101010101040202020d02020203`, img`
. . . . . 2 2 . . . . . . . . . . . 2 . 
2 2 . 2 . . . . 2 2 2 . . 2 2 2 2 . 2 . 
2 . 2 2 2 . . 2 2 2 . . 2 . . . . . 2 . 
. 2 2 . . . 2 2 2 . . 2 2 . . . 2 2 . . 
. . . . 2 2 . . . . . . . . 2 2 2 . . . 
. . . 2 . . . . 2 2 2 2 2 2 . . . . 2 . 
. . 2 . . 2 2 . . . . . . . . . . 2 2 . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0,sprites.builtin.coral0,sprites.builtin.oceanDepths7,sprites.builtin.oceanDepths1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles9,sprites.swamp.swampTile13,sprites.builtin.forestTiles11], TileScale.Sixteen);
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
// Code généré automatiquement. Ne pas modifier.
