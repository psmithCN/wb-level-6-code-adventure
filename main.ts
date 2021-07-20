namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 6 6 6 6 . . 
        . 6 1 4 4 4 6 . 
        6 d 4 4 4 4 4 6 
        c b b 1 1 4 d c 
        . c b b 4 1 c . 
        . . c c c c . . 
        `, footballPlayer1, 66, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    fieldGoal.startEffect(effects.warmRadial, 200)
    music.jumpUp.play()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.zapped.play()
})
let footballPlayer2: Sprite = null
let projectile: Sprite = null
let fieldGoal: Sprite = null
let footballPlayer1: Sprite = null
game.splash("Football Frenzy")
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .bd111111111111111111db.
    bd1dbbbbbbbbbbbbbbbbd1db
    b1dbbbbbbbbbbbbbbbbbbd1b
    b1bd1111111111111111db1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1bd1111111111111111db1b
    bd1bbbbbbbbbbbbbbbbbb1db
    bbd111111111111111111dbb
    .bbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.showLongText("Press A to Throw the ball to the goal post!", DialogLayout.Center)
game.showLongText("Stay away from the opposing players!", DialogLayout.Center)
game.showLongText("Collect hearts for extra lives.", DialogLayout.Center)
scene.setBackgroundColor(7)
footballPlayer1 = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
footballPlayer1.setPosition(19, 64)
controller.moveSprite(footballPlayer1)
footballPlayer1.setStayInScreen(true)
fieldGoal = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........bdcc.
    ...........bdbb.
    ..........bddc..
    ..........bdbb..
    .........bddc...
    .........bdbb...
    ........bddc....
    ........bdbb....
    .......bddc.....
    .......bdbb.....
    ......bddc......
    ......bdbb......
    .....bddc.......
    .....bdbb.......
    ....bddc........
    ....bdbb........
    ...bddc.........
    ...bdbb.........
    ..bddc..........
    ..bdbb..........
    .bddc...........
    .bdbb...........
    b1dc............
    b11c............
    b11c............
    b11c.........cc.
    b11c........cbbc
    b11c........cbbc
    b11c.......bdcc.
    b11c.......bdbb.
    b11c......bddc..
    b11bccc...bdbb..
    b11bbbbcccddc...
    b11bcccbccdbb...
    b11b..ccbddc....
    b11b...ccdbbc...
    b11b...bddcbc...
    b11b...bdbbcbc..
    b11b..bddc.fbc..
    b11b..bdbb.fbf..
    b11b.bddc..fcf..
    b11b.bdbb..fcf..
    b11bbddc...fcf..
    b11bbdbb...fcf..
    b11bddc...cfcfc.
    b11ddbb..cbfcfbc
    b1dddc...cdfffdc
    b1ddbb...cdcfcdc
    cdddc....cbdddbc
    cddbb....cbbbbbc
    cddc.....cbbbbbc
    cdbb.....cbbbbbc
    .cc......cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........8bbbbb8
    .........8bbbbb8
    .........6bbbbb6
    ..........6bbb6.
    ...........666..
    `, SpriteKind.Goal)
fieldGoal.setPosition(145, 62)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    footballPlayer2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . b 6 6 6 6 6 . . . . . . 
        . . . b 6 6 d 6 6 6 6 . . . . . 
        . . . b 6 6 6 6 6 6 6 b . . . . 
        . . . b 6 6 6 6 6 6 6 b . . . . 
        . c c f f b 6 6 6 6 6 b . . . . 
        . c b f f f f b 6 6 b b . . . . 
        . c d f f f f f b b f b b b . . 
        . c b 1 c 5 5 b c f d 6 6 b b . 
        . . . c c 5 1 1 5 c b 6 6 b b . 
        . . . . c 5 5 5 5 c b b 1 1 b . 
        . . . d c b 5 5 5 d d f f f . . 
        . . . d d c c c c d d f f f b b 
        . . . . . . c c c f f f f b b b 
        . . . . . . . f f f . . . . b b 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Enemy)
    footballPlayer2.setPosition(143, 62)
    footballPlayer2.setVelocity(randint(-50, -10), randint(10, 50))
    footballPlayer2.setBounceOnWall(true)
})
game.onUpdateInterval(randint(1000, 10000), function () {
    footballPlayer2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    footballPlayer2.setPosition(randint(10, 140), randint(10, 110))
})
