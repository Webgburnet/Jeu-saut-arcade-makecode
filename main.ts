scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tilemap`level_1`)
