## Idea for the future

### Evaluation
- **Material Evaluation**, assessing the total value of all pieces on the board. *The most basic form of evaluation*
- **Piece-Square Tables**, tables to give additional value to pieces based on their position on the board. For example, central pawns might be more valuable than those on the sides.
- **Pawn Structure Analysis**, evaluating the formation of pawns, including doubled pawns, isolated pawns, backward pawns, passed pawns, pawn chains...
- **King Safety**, pretty clear
- **Mobility**, measuring the number of legal moves available to a player, which often correlates with the initiative and potential for attack
- **Control of Key Squares**, evaluating control over important squares, such as central squares, outposts for knights, or squares near the opponent's king. (Could be associated with **Piece-Square Tables**)
- **Piece Activity**, assessing how active and effective pieces are, such as bishops on long diagonals, rooks on open files, or well-placed knights (More basically, how pieces are free to move on board) => Might be difficult since these pieces might have to suicide for doing better move, may the value of this evaluation has to be smaller
- **Tactical Themes**, identifying potential tactical motifs like forks, pins, skewers, discovered attacks, ... (Should be already working with the basic MinMax)
- **Space Advantage**, evaluating the amount of space controlled by a player’s pieces, which can influence mobility and potential for launching attacks. (Similar to **Mobility** and also **Pawn Structure Analysis**)
- **Endgame Evaluation** (And also early/mid), differentiating the value of pieces and strategic considerations in the endgame, such as the importance of king activity and pawn promotion possibilities (could be associate with **Pawn Structure Analysis**, **Mobility** and **Piece Activity**)
- **Pairing pieces** as Bishop / Rooks / Knight.. having both give an extra value, for the rooks, check connectivity
- **Pawn Island Count**, evaluating the number of disjointed groups of pawns, as fewer pawn islands typically indicate a stronger pawn structure.
- **Fortress Detection**, identifying positions where a side can set up a fortress, making it impossible for the opponent to break through.
- **Draw Detection**, recognizing situations where a draw is inevitable (such as insufficient mating material, or perpetual check patterns). (Really useful to lead the game to a draw to avoid loose (and also avoid the opponent to draw))