import dataclasses
import typing

PlaylistId = typing.NewType("PlaylistId", int)


@dataclasses.dataclass
class Start:
    playlist_id: PlaylistId


@dataclasses.dataclass
class Pause:
    pass


@dataclasses.dataclass
class Stop:
    pass


UserAction = Start | Pause | Stop


def main() -> None:
    # [...]
    action = Start(42)
    # [...]

    match action:
        case Start(playlist_id):
            print(f"Start playlist {playlist_id}")
        case Pause():
            print("Pause")
        case Stop():
            print("Stop")
        case _:
            typing.assert_never(action)


if __name__ == "__main__":
    main()
