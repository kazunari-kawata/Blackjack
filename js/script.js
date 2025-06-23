// スタック準備
const stack = [
    // ♠ Spades
    { suit: "spade", number: 1, value: 1, image: "./materials/spades_1.png" },
    { suit: "spade", number: 2, value: 2, image: "./materials/spades_2.png" },
    { suit: "spade", number: 3, value: 3, image: "./materials/spades_3.png" },
    { suit: "spade", number: 4, value: 4, image: "./materials/spades_4.png" },
    { suit: "spade", number: 5, value: 5, image: "./materials/spades_5.png" },
    { suit: "spade", number: 6, value: 6, image: "./materials/spades_6.png" },
    { suit: "spade", number: 7, value: 7, image: "./materials/spades_7.png" },
    { suit: "spade", number: 8, value: 8, image: "./materials/spades_8.png" },
    { suit: "spade", number: 9, value: 9, image: "./materials/spades_9.png" },
    {
        suit: "spade",
        number: 10,
        value: 10,
        image: "./materials/spades_10.png",
    },
    {
        suit: "spade",
        number: 11,
        value: 10,
        image: "./materials/spades_11.png",
    }, // J
    {
        suit: "spade",
        number: 12,
        value: 10,
        image: "./materials/spades_12.png",
    }, // Q
    {
        suit: "spade",
        number: 13,
        value: 10,
        image: "./materials/spades_13.png",
    }, // K

    // ♣ Clubs
    { suit: "club", number: 1, value: 1, image: "./materials/clubs_1.png" },
    { suit: "club", number: 2, value: 2, image: "./materials/clubs_2.png" },
    { suit: "club", number: 3, value: 3, image: "./materials/clubs_3.png" },
    { suit: "club", number: 4, value: 4, image: "./materials/clubs_4.png" },
    { suit: "club", number: 5, value: 5, image: "./materials/clubs_5.png" },
    { suit: "club", number: 6, value: 6, image: "./materials/clubs_6.png" },
    { suit: "club", number: 7, value: 7, image: "./materials/clubs_7.png" },
    { suit: "club", number: 8, value: 8, image: "./materials/clubs_8.png" },
    { suit: "club", number: 9, value: 9, image: "./materials/clubs_9.png" },
    { suit: "club", number: 10, value: 10, image: "./materials/clubs_10.png" },
    { suit: "club", number: 11, value: 10, image: "./materials/clubs_11.png" },
    { suit: "club", number: 12, value: 10, image: "./materials/clubs_12.png" },
    { suit: "club", number: 13, value: 10, image: "./materials/clubs_13.png" },

    // ♦ Diamonds
    {
        suit: "diamond",
        number: 1,
        value: 1,
        image: "./materials/diamonds_1.png",
    },
    {
        suit: "diamond",
        number: 2,
        value: 2,
        image: "./materials/diamonds_2.png",
    },
    {
        suit: "diamond",
        number: 3,
        value: 3,
        image: "./materials/diamonds_3.png",
    },
    {
        suit: "diamond",
        number: 4,
        value: 4,
        image: "./materials/diamonds_4.png",
    },
    {
        suit: "diamond",
        number: 5,
        value: 5,
        image: "./materials/diamonds_5.png",
    },
    {
        suit: "diamond",
        number: 6,
        value: 6,
        image: "./materials/diamonds_6.png",
    },
    {
        suit: "diamond",
        number: 7,
        value: 7,
        image: "./materials/diamonds_7.png",
    },
    {
        suit: "diamond",
        number: 8,
        value: 8,
        image: "./materials/diamonds_8.png",
    },
    {
        suit: "diamond",
        number: 9,
        value: 9,
        image: "./materials/diamonds_9.png",
    },
    {
        suit: "diamond",
        number: 10,
        value: 10,
        image: "./materials/diamonds_10.png",
    },
    {
        suit: "diamond",
        number: 11,
        value: 10,
        image: "./materials/diamonds_11.png",
    },
    {
        suit: "diamond",
        number: 12,
        value: 10,
        image: "./materials/diamonds_12.png",
    },
    {
        suit: "diamond",
        number: 13,
        value: 10,
        image: "./materials/diamonds_13.png",
    },

    // ♥ Hearts
    { suit: "heart", number: 1, value: 1, image: "./materials/hearts_1.png" },
    { suit: "heart", number: 2, value: 2, image: "./materials/hearts_2.png" },
    { suit: "heart", number: 3, value: 3, image: "./materials/hearts_3.png" },
    { suit: "heart", number: 4, value: 4, image: "./materials/hearts_4.png" },
    { suit: "heart", number: 5, value: 5, image: "./materials/hearts_5.png" },
    { suit: "heart", number: 6, value: 6, image: "./materials/hearts_6.png" },
    { suit: "heart", number: 7, value: 7, image: "./materials/hearts_7.png" },
    { suit: "heart", number: 8, value: 8, image: "./materials/hearts_8.png" },
    { suit: "heart", number: 9, value: 9, image: "./materials/hearts_9.png" },
    {
        suit: "heart",
        number: 10,
        value: 10,
        image: "./materials/hearts_10.png",
    },
    {
        suit: "heart",
        number: 11,
        value: 10,
        image: "./materials/hearts_11.png",
    },
    {
        suit: "heart",
        number: 12,
        value: 10,
        image: "./materials/hearts_12.png",
    },
    {
        suit: "heart",
        number: 13,
        value: 10,
        image: "./materials/hearts_13.png",
    },
];

// A（エース）を1または11として扱う関数
function calculateHandValue(hand) {
    let total = 0;
    let aceCount = 0;

    for (const card of hand) {
        total += card.value;
        if (card.number === 1) aceCount++;
    }

    while (aceCount > 0 && total + 10 <= 21) {
        total += 10;
        aceCount--;
    }

    return total;
}

$("#hit-button").prop("disabled", true);
$("#stand-button").prop("disabled", true);
$("#surrender-button").prop("disabled", true);
$("#doubleDown-button").prop("disabled", true);
$("#your1-num").css("display", "none");

$("#start-button").on("click", function () {
    // ヒットボタン⇨有効化、スタンドボタン⇨⇨有効化、スタートボタン⇨無効化
    $("#hit-button").prop("disabled", false);
    $("#stand-button").prop("disabled", false);
    $("#surrender-button").prop("disabled", false);
    $("#doubleDown-button").prop("disabled", false);
    $("#your1-num").show();

    // スタートボタン無効化
    $("#start-button").css("display", "none");

    // トランプのデッキを７組分使う
    const fullDeck = [];
    for (let i = 0; i < 7; i++) {
        fullDeck.push(...stack);
    }

    // スタートボタン押したらランダムでカードを選んで配置
    const randomIndex1 = Math.floor(Math.random() * fullDeck.length);
    const enemy_card1 = fullDeck[randomIndex1];
    fullDeck.splice(randomIndex1, 1); // 選ばれたカードをスタックから削除

    const randomIndex2 = Math.floor(Math.random() * fullDeck.length);
    const your_card1 = fullDeck[randomIndex2];
    fullDeck.splice(randomIndex2, 1); // 選ばれたカードをスタックから削除

    const randomIndex3 = Math.floor(Math.random() * fullDeck.length);
    const your_card2 = fullDeck[randomIndex3];
    fullDeck.splice(randomIndex3, 1); // 選ばれたカードをスタックから削除

    $("#your1-card1").html("<img src=" + your_card1.image + ">");
    $("#your1-card2").html("<img src=" + your_card2.image + ">");
    $("#enemy-card1").html("<img src=" + enemy_card1.image + ">");

    // カウントアップする機能
    let your_hand = [your_card1, your_card2];
    let your_total_value = calculateHandValue(your_hand);
    let enemy_hand = [enemy_card1];
    let enemy_total_value = calculateHandValue(enemy_hand);

    $("#enemy-num").html(enemy_total_value);
    $("#your1-num").html(your_total_value);

    let hit_count = 0;
    // Hitアクション
    $("#hit-button").on("click", function (e) {
        $("#surrender-button").css("display", "none");
        $("#doubleDown-button").css("display", "none");

        if (your_total_value <= 21) {
            hit_count++;
            const randomIndex = Math.floor(Math.random() * fullDeck.length);
            const your_new_card = fullDeck[randomIndex];
            fullDeck.splice(randomIndex, 1); // 選ばれたカードをスタックから削除

            // 新しいカードを追加表示
            $("#your1-card" + (2 + hit_count)).html(
                "<img src=" + your_new_card.image + ">"
            );

            your_hand.push(your_new_card);
            your_total_value = calculateHandValue(your_hand);
            $("#your1-num").html(your_total_value);
            // 勝者判定
            if (your_total_value > 21) {
                $("#winner").html("あなたがバースト。ディーラーの勝ち");
                $("#start-button").css("display", "none");
                $(".reset")
                    .css("display", "block")
                    .css("background-color", "yellow");
                // 勝者判定後は"hit"と"stand"ボタンを無効化
                $("#hit-button").prop("disabled", true);
                $("#stand-button").prop("disabled", true);
                $("#surrender-button").prop("disabled", true);
            }
        }
    });
    // リセットボタン
    $(".reset").on("click", function () {
        location.reload();
    });

    let enemy_card_count = 1;
    // standアクション
    $("#stand-button").on("click", function (e) {
        $("#surrender-button").css("display", "none");
        $("#doubleDown-button").css("display", "none");

        const randomIndex = Math.floor(Math.random() * fullDeck.length);
        enemy_total_value = calculateHandValue(enemy_hand);

        $("#enemy-num").html(enemy_total_value);
        const enemy_new_card = fullDeck.splice(randomIndex, 1)[0]; // 選ばれたカードをスタックから削除
        enemy_card_count++;

        $("#enemy-card" + enemy_card_count).html(
            "<img src=" + enemy_new_card.image + ">"
        );

        // ディーラー持ち点カウントアップして表示
        enemy_hand.push(enemy_new_card);
        enemy_total_value = calculateHandValue(enemy_hand);
        $("#enemy-num").html(enemy_total_value);

        // ディーラーが17未満の場合、引き続ける
        while (enemy_total_value < 17) {
            const randomIndex = Math.floor(Math.random() * fullDeck.length);
            const enemy_new_card = fullDeck.splice(randomIndex, 1)[0]; // 選ばれたカードをスタックから削除

            enemy_card_count++;
            $("#enemy-card" + enemy_card_count).html(
                "<img src=" + enemy_new_card.image + ">"
            );

            enemy_total_value += enemy_new_card.value;
            $("#enemy-num").html(enemy_total_value);
        }
        // 勝者判定
        if (enemy_total_value > 21) {
            $("#winner").html("ディーラーがバースト。あなたの勝ち");
        } else if (enemy_total_value > your_total_value) {
            $("#winner").html("ディーラーの勝ち");
        } else if (enemy_total_value == your_total_value) {
            $("#winner").html("引き分け");
        } else {
            $("#winner").html("あなたの勝ち");
        }
        // 勝者判定後はボタンを無効化
        $("#hit-button").prop("disabled", true);
        $("#stand-button").prop("disabled", true);

        // リセットボタン
        $("#start-button").css("display", "none");
        $(".reset").css("display", "block").css("background-color", "yellow");
        $(".reset").on("click", function () {
            location.reload();
        });
    });

    // Surrenderアクション
    $("#surrender-button").on("click", function () {
        $("#winner").html("ディーラーがバースト。ディーラーの勝ち");

        $("#hit-button").prop("disabled", true);
        $("#stand-button").prop("disabled", true);
        $("#surrender-button").prop("disabled", true);
        // リセットボタン
        $("#start-button").css("display", "none");
        $(".reset").css("display", "block").css("background-color", "yellow");
        $(".reset").on("click", function () {
            location.reload();
        });
    });

    // ダブルダウンはfalse
    let doubled = false;

    $("#doubleDown-button").on("click", function () {
        // 2枚の時点でしか選べないように制限
        if (your_hand.length !== 2 || doubled) return;

        // 賭け金処理を追加したら追加
        // bet *= 2;
        doubled = true;

        // 1枚だけカードを引く
        const randomIndex = Math.floor(Math.random() * fullDeck.length);
        const your_new_card = fullDeck.splice(randomIndex, 1)[0];

        hit_count++;
        $("#your1-card" + (2 + hit_count)).html(
            `<img src="${your_new_card.image}">`
        );
        your_hand.push(your_new_card);
        your_total_value = calculateHandValue(your_hand);
        $("#your1-num").html(your_total_value);

        // Hit/Double Downボタン無効化
        $("#hit-button").prop("disabled", true);
        $("#doubleDown-button").prop("disabled", true);

        // 自動でStand実行（ディーラーターンへ）
        $("#stand-button").trigger("click");
    });

    // splitアクション
});
