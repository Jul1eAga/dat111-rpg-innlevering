// #############
//  "Database"     #
// #############
//  Oversikt over utstyret som finnes i spillet.
//  Uttrykt som en ordbok nøkkel-verdi-par, en tekststreng som nøkkel og verdier som tupler.
let equipmentDatabase = {
    "Tunic of speed" : ["speed", 5],
}

// ######################
//  Oppsett av karakter     #
// ######################
//  Setter startverdi for gull i en vanlig variabel 
//  Vi oppdaterer denne senere når karakteren åpner en kiste og kjøper/selger ting i butikken.
let gold = 0
//  Grunnivået på ferdighetene til karakteren
//  Uttrykt ved hjelp av en ordbok/dictionary (nøkkel : verdi)
let stats = {
    "strength" : 3,
    "intellect" : 1,
}

//  Inventaret til karakteren, uttrykt ved hjelp av tekststrenger i en liste.
//  Tekststrengene i listen skal være nøkkelverdien til elementer i equipmentDatabase,
//  slik at man da kan hente ut de tilhørende verdiene derfra.
let inventory = ["Tunic of speed"]
//  Setter startanimasjon til å være idel/ledig.
//  Bruker denne variabelen senere for å håndtere korrekt animering
let current_animation = "idle"
// ##########################
//  Oppsett av nivået/banen #
// ##########################
// ## Banen ###
//  Setter tilemap, som er en samling av tiles/fliser som vi har satt sammen for å danne nivået vårt.
//  Tilemaps og andre audiovisuelle elementer finner man under "Assets" i toppmenyen.
tiles.setCurrentTilemap(tilemap`fieldLevel`)
// ## Karakteren ###
//  Oppretter den visuelle representasjonen av karakteren som en sprite ("bevegelig bilde").
//  SpriteKind er en enum som lar oss kategorisere spriten for å senere enkelt kunne utføre operasjoner på sprites av samme kategori.
let playerChar = sprites.create(assets.image`heroIdleFront`, SpriteKind.Player)
playerChar.setPosition(128, 250)
//  Setter posisjonen til karakteren til å være nederst i midten av brettet
scene.cameraFollowSprite(playerChar)
//  Setter kameraet til å følge etter karakteren sin sprite.
//  Angir karakteren sin sprite som "bevegelses-sprite", dvs. at standardkontrollene vil nå påvirke spillerens sprite.
controller.moveSprite(playerChar)
// ## Mat ###
//  Oppretter sprite for en taco og setter dens posisjon.
let taco = sprites.create(assets.image`taco`, SpriteKind.Food)
taco.setPosition(10, 100)
// ## Skattekiste ###
//  Oppretter sprite for en skattekiste og setter dens posisjon.
let treasure = sprites.create(assets.image`chestClosed`, SpriteKind.Food)
treasure.setPosition(200, 150)
//  Angir at kisten ikke er åpnet enda, slik at vi senere unngå at gull gis mer enn en gang til spilleren.
let treasureNotOpened = true
// ## Butikk ###
//  Oppretter sprite for en butikk og setter dens posisjon.
let shop = sprites.create(assets.image`house`, SpriteKind.Food)
shop.setPosition(128, 20)
// ## Musikk ###
//  Starter bakgrunnsmusikk som er et lydspor lagret i Assets.
//  Setter PlaybackMode til en verdi som gjør at sporet spilles kontinuerlig i bakgrunnen.
music.play(music.createSong(assets.song`backgroundSong`), music.PlaybackMode.LoopingInBackground)
// #############
//  Funksjoner #
// #############
//  Variabel for å holde kontroll på om spilleren vil inn i butikken.
let enterShop = false
//  Hjelpefunksjon som lar oss pause spillet frem til spilleren har utført et valg.
//  Manglet implementasjon i Python for MakeCode Arcade.
//  Spilløkken som sørger for interaktivitet i spillet.
//  Funksjon som sørger for at animasjonene passer med bevegelsen som foregår.
function update_character_animation() {
    
    //  Variabel som hjelper oss til å unngå å overskrive pågående animasjoner.
    //  Akriverer venstrestilt animasjon dersom venstre tast er trykket.
    if (controller.left.isPressed()) {
        if (current_animation != "walk_left") {
            //  Unngår å overskrive pågående animasjon
            //  Starter animasjon på spillerens karakter, med gitt animasjon og hastighet, og setter den til å loope.
            animation.runImageAnimation(playerChar, assets.animation`heroWalkLeft`, 200, true)
            current_animation = "walk_left"
        }
        
    }
    
}

//  Oppgir at vår on_update-funksjon skal fungere som on_update,
//  dvs. det som fungerer som spilløkken som oppdateres kontinuerlig
//  og sørger for at spillet blir interaktivt.
game.onUpdate(function on_update() {
    //  Taco-spriten blir "spist" dersom spillerkarakteren sin sprite overlapper den.
    //  Dette gjøres ved å spille av et lydklipp og sette resterende livstid for sprite til 0.
    if (playerChar.overlapsWith(taco)) {
        music.play(music.createSong(assets.song`upgrade`), music.PlaybackMode.InBackground)
        taco.lifespan = 0
    }
    
    //  Sørger for at vi bruker de globale verdiene til disse variablene
    //  (som vi definerte tidligere), ellers ville det blitt opprettet lokale
    //  variabler med samme navn når vi endrer verdi på de.
    
    
    //  En skattekiste blir åpnet dersom spillerens sprite overlapper og kisten ikke har vært åpnet før.
    //  Ved flere enn en kiste på kartet bør 
    if (playerChar.overlapsWith(treasure) && treasureNotOpened) {
        gold = gold + 100
        //  Oppdaterer gullbeholdningen til spilleren
        treasure.setImage(assets.image`chestOpen`)
        //  Bytter ut spriten til kisten med en åpnet variant.
        treasureNotOpened = false
        //  Sier at kisten har blitt åpnet, slik at vi ikke går inn i denne if-en igjen.
        //  Spiller av "upgrade"-lydsporet. PlaybackMode IN_BACKGROUND gjør at spillet fortsetter samtidig som den spiller.
        music.play(music.createSong(assets.song`upgrade`), music.PlaybackMode.InBackground)
        //  Spilleren får en beskjed i en dialogboks om at de har fått mer gull.
        game.showLongText("You got " + ("" + 100) + " gold!", DialogLayout.Bottom)
    }
    
    //  Dersom spillerens sprite overlapper med butikken vil de kunne gå inn i den.
    if (playerChar.overlapsWith(shop)) {
        pauseUntil(function onPauseUntil(): boolean {
            
            enterShop = game.ask("Enter shop?")
            return true
        })
        //  Hjelpefunksjon som holder spillet pauset til brukeren avgir svar.
        if (enterShop) {
            tiles.setCurrentTilemap(tilemap`shopInterior`)
            //  Endrer tilemap
            //  Fjerner alle sprites av type food (som vi her har brukt som en generell kategori)
            sprites.destroyAllSpritesOfKind(SpriteKind.Food)
            playerChar.setPosition(120, 160)
        } else {
            //  Oppdaterer spillerens posisjon
            playerChar.setPosition(128, 70)
        }
        
    }
    
    //  Flytter karakteren til en posisjon som ikke overlapper med butikken.
    //  Oppdaterer karakterens animasjon
    update_character_animation()
})
