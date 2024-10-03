

class Start { constructor(public playlistId: number){} };
class Pause { };
class Stop { };

type Action = Start | Pause | Stop;
  
function main() {
    // [...]
    const action = new Start(42);
    // [...]

    switch (action.constructor) {
        case Start:
            console.log(`Start playlist ${action.playlistId}`)
        break;
        case Pause:
            console.log(`Pause`)
        break;
        case Stop:
            console.log(`Stop`)
        break;
    }
}

main()
