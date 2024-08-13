module metaschool::RockPaperScissors_01 {
    use std::string::{String,utf8};
    use std::signer;

    struct DuelResult has key
    {
        computer_selection: String,
        duel_result: String
    }

    public entry fun createGame(account: &signer)acquires DuelResult { 
        if (exists<DuelResult>(signer::address_of(account))){
            let result = borrow_global_mut<DuelResult>(signer::address_of(account));
            result.computer_selection = utf8(b"New Game Created");  
            result.duel_result = utf8(b"Game not yet played");
        }
        else {
            let result = DuelResult { computer_selection: utf8(b"New Game Created") , duel_result: utf8(b"Game not yet played")};
            move_to(account, result);
        }
    }
}
