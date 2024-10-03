pub type PlaylistId = i32;

pub enum UserAction {
    Start(PlaylistId),
    Pause,
    Stop,
}

pub fn main() {
    // [...]
    let action = UserAction::Start(42);
    // [...]

    match action {
        UserAction::Start(playlist_id) => {
            println!("Start playlist {}", playlist_id)
        }
        UserAction::Pause => {
            println!("Pause")
        }
        UserAction::Stop => {
            println!("Stop")
        }
    }
}
