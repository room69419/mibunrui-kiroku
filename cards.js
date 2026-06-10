/**
 * cards.js — 凪タロット カードデータ v2.0
 *
 * 方針:
 *   - ライダー・ウェイト版の意味を土台に、凪タロットの世界観へ再解釈
 *   - スピリチュアル用語は使わない
 *   - 心理カウンセラー・信頼できる友人のような口調
 *   - 断定しない / 不安を煽らない / 優しく背中を押す
 *   - 海・月の比喩は使いすぎない
 *
 * データ構造:
 *   id               : カード番号
 *   name             : 英語カード名（管理用）
 *   image            : 画像ファイル名
 *   nameJa           : 日本語カード名
 *   nameEn           : 英語カード名（表示用）
 *   roman            : ローマ数字（大アルカナ）
 *   uprightMeaning   : 正位置の意味（1〜2行）
 *   reversedMeaning  : 逆位置の意味（1〜2行）
 *   uprightMessage   : 凪からのメッセージ（正位置）
 *   reversedMessage  : 凪からのメッセージ（逆位置）
 *
 * 小アルカナ追加ガイド:
 *   suit プロパティ（"wands"/"cups"/"swords"/"pentacles"）を追加し
 *   DECK_MINOR 配列を定義して DECK_FULL に結合してください。
 */

const DECK_MAJOR = [
  {
    id: 0,
    name: "THE_FOOL",
    image: "fool.png",
    nameJa: "愚者",
    nameEn: "The Fool",
    roman: "0",
    uprightMeaning: "新しい一歩を踏み出すタイミング。先のことを考えすぎず、まず動いてみることに意味がある時期。",
    reversedMeaning: "焦りや準備不足から、判断が雑になっているかもしれない。立ち止まって確かめる余裕が必要な状態。",
    uprightMessage: "全部そろってから始めなくていいと思います。\n「とりあえずやってみる」くらいの気持ちが、意外とちょうどいいスタートになることがあります。",
    reversedMessage: "気持ちが焦っていませんか。\n急いで決めなくていいことも、きっとあります。今日は少しだけペースを落としてみてください。"
  },
  {
    id: 1,
    name: "THE_MAGICIAN",
    image: "magician.png",
    nameJa: "魔術師",
    nameEn: "The Magician",
    roman: "I",
    uprightMeaning: "必要な力や手段はすでに手の中にある。あとは動き出す決断をするだけの時期。",
    reversedMeaning: "力はあるのに、うまく使えていない状態。自信のなさや方向性のズレが原因かもしれない。",
    uprightMessage: "今のあなたには、ちゃんと動ける力が備わっています。\n「もう少し準備してから」と思っているなら、もう十分かもしれませんよ。",
    reversedMessage: "頑張っているのに空回りしている感じ、ありませんか。\nやり方を少し変えるだけで、流れが変わることがあります。一度立ち止まって整理してみましょう。"
  },
  {
    id: 2,
    name: "THE_HIGH_PRIESTESS",
    image: "high_priestess.png",
    nameJa: "女教皇",
    nameEn: "The High Priestess",
    roman: "II",
    uprightMeaning: "答えはすでに自分の中にある。静かに内側の声に耳を傾けることが大切な時期。",
    reversedMeaning: "周りの意見に流されて、自分の感覚を後回しにしてしまっている状態。",
    uprightMessage: "誰かに答えを求める前に、少し自分に聞いてみてください。\n「本当はどうしたいか」、静かに考える時間が今日は必要かもしれません。",
    reversedMessage: "情報や意見が多すぎて、混乱していませんか。\n他の人の言葉も大切ですが、自分がどう感じているかを一番に置いてみてください。"
  },
  {
    id: 3,
    name: "THE_EMPRESS",
    image: "empress.png",
    nameJa: "女帝",
    nameEn: "The Empress",
    roman: "III",
    uprightMeaning: "大切にしてきたものが、少しずつ形になっていく時期。感じることや楽しむことに価値がある。",
    reversedMeaning: "人に与えすぎて、自分自身のことが後回しになっている状態。",
    uprightMessage: "丁寧に続けてきたことは、ちゃんと積み重なっています。\n今日は結果を急がず、そのプロセス自体を味わってみてください。",
    reversedMessage: "誰かのために頑張りすぎていませんか。\n自分を後回しにし続けると、いつか限界が来ます。今日は自分のための時間を、少し作ってみてください。"
  },
  {
    id: 4,
    name: "THE_EMPEROR",
    image: "emperor.png",
    nameJa: "皇帝",
    nameEn: "The Emperor",
    roman: "IV",
    uprightMeaning: "地に足をつけて、着実に進める時期。計画を立てて行動することが力になる。",
    reversedMeaning: "コントロールへの執着や頑固さが、周囲との関係をぎこちなくしているかもしれない。",
    uprightMessage: "今日は地道にやることが、一番の近道だと思います。\n焦らず、一つひとつ確かめながら進んでみてください。",
    reversedMessage: "何でも自分でコントロールしようとして、疲れていませんか。\n全部うまくやらなくていい。少し任せたり、手を抜いたりすることも大事です。"
  },
  {
    id: 5,
    name: "THE_HIEROPHANT",
    image: "hierophant.png",
    nameJa: "法王",
    nameEn: "The Hierophant",
    roman: "V",
    uprightMeaning: "経験や実績のある人の言葉、あるいは積み重ねてきた知識の中に、今の答えがある時期。",
    reversedMeaning: "慣習やルールが合わなくなってきているサイン。自分なりのやり方を模索してもいい時期。",
    uprightMessage: "今日は信頼できる人に話を聞いてみるといいかもしれません。\n一人で抱えて考え続けるより、誰かの経験が参考になることがあります。",
    reversedMessage: "「こうしなければいけない」という思い込み、少し疑ってみてください。\nみんながそうしているから、が理由になっていませんか。あなたに合ったやり方を探していい時期です。"
  },
  {
    id: 6,
    name: "THE_LOVERS",
    image: "lovers.png",
    nameJa: "恋人",
    nameEn: "The Lovers",
    roman: "VI",
    uprightMeaning: "自分の価値観に正直な選択をする時期。誰かとの関係において、誠実さが大切になる。",
    reversedMeaning: "迷いや価値観のすれ違いから、選択が難しくなっている状態。",
    uprightMessage: "損得よりも、「自分はどうしたいか」を優先していい場面だと思います。\n正解を探すより、自分の気持ちに素直でいることが、今一番大切かもしれません。",
    reversedMessage: "どうすればいいか、堂々巡りになっていませんか。\n焦って答えを出さなくていいです。もう少し時間をかけて、自分の気持ちを整理してみてください。"
  },
  {
    id: 7,
    name: "THE_CHARIOT",
    image: "chariot.png",
    nameJa: "戦車",
    nameEn: "The Chariot",
    roman: "VII",
    uprightMeaning: "困難があっても目標に向かって進んでいける時期。意志の力が状況を動かす。",
    reversedMeaning: "方向性が定まらず、力が分散している状態。立ち止まって目的を確認する必要があるかもしれない。",
    uprightMessage: "うまくいかないことがあっても、今日は前を向いていい日です。\n少し強引でも進んでみることが、結果として正解になることがあります。",
    reversedMessage: "頑張っているのに進んでいる気がしない、そんな感覚はありませんか。\n目標がぼやけているときは、まず「何のためにやっているか」を確認するといいかもしれません。"
  },
  {
    id: 8,
    name: "STRENGTH",
    image: "strength.png",
    nameJa: "力",
    nameEn: "Strength",
    roman: "VIII",
    uprightMeaning: "強さは、穏やかさや粘り強さの中にある。圧力ではなく、誠実さで乗り越えられる時期。",
    reversedMeaning: "自信を失っていたり、不安や恐れに引っ張られやすくなっている状態。",
    uprightMessage: "力で押し切らなくていいんです。\n穏やかに、でも諦めずにいること。それがあなたの一番の強みになっていると思います。",
    reversedMessage: "今日は自分に厳しくしすぎないでください。\n「できなかった」より「やろうとした」ことを、ちゃんと認めてあげてください。"
  },
  {
    id: 9,
    name: "THE_HERMIT",
    image: "hermit.png",
    nameJa: "隠者",
    nameEn: "The Hermit",
    roman: "IX",
    uprightMeaning: "一人で静かに考える時間が、今の自分に必要な時期。焦らず、内側を整えることが大切。",
    reversedMeaning: "孤立や閉じこもりが長くなり、視野が狭くなっているかもしれない状態。",
    uprightMessage: "誰かに合わせることを、少しお休みしていい日かもしれません。\n自分のペースで、自分のことを考える時間を大切にしてみてください。",
    reversedMessage: "一人で考え続けても、答えが出ないこともあります。\n誰かに話してみると、思いがけず気持ちが整理されることがあります。"
  },
  {
    id: 10,
    name: "WHEEL_OF_FORTUNE",
    image: "wheel_of_fortune.png",
    nameJa: "運命の輪",
    nameEn: "Wheel of Fortune",
    roman: "X",
    uprightMeaning: "状況が動き始めている転換点。変化を自然なものとして受け取ることで、流れに乗れる時期。",
    reversedMeaning: "変化への抵抗や、状況を固定しようとすることで、停滞が生まれている状態。",
    uprightMessage: "何かが変わり始めている気配、感じていませんか。\nその変化を無理に止めようとしなくていいです。少し流れに任せてみると、案外うまくいくことがあります。",
    reversedMessage: "変わることへの不安は、自然なことです。\nただ、今の状態にしがみつくことが、かえって苦しさを長引かせている可能性もあります。少し手を放してみましょうか。"
  },
  {
    id: 11,
    name: "JUSTICE",
    image: "justice.png",
    nameJa: "正義",
    nameEn: "Justice",
    roman: "XI",
    uprightMeaning: "誠実に向き合うことが、今の状況を動かす鍵になる時期。公平な判断が求められる。",
    reversedMeaning: "自己欺瞞や不公平さが、心のどこかに引っかかっている状態。",
    uprightMessage: "複雑に考えすぎず、「正直にどうか」で判断してみてください。\n誠実であることは、長い目で見たとき必ず自分を助けてくれます。",
    reversedMessage: "少し目をそらしていることがあるかもしれません。\nそれに気づいているなら、向き合う準備はできていると思います。怖くないですよ。"
  },
  {
    id: 12,
    name: "THE_HANGED_MAN",
    image: "hanged_man.png",
    nameJa: "吊られた男",
    nameEn: "The Hanged Man",
    roman: "XII",
    uprightMeaning: "今は動かずに待つことが最善の時。視点を変えることで、見えていなかったものが見えてくる。",
    reversedMeaning: "不必要な我慢や停滞が続いていて、疲弊してきているサイン。",
    uprightMessage: "今日は何もしないことが、一番いい選択かもしれません。\n焦って動くより、もう少し待ってみると、状況が自然に変わることがあります。",
    reversedMessage: "ずっと我慢してきていませんか。\n頑張り続けることが正解じゃないこともあります。今日は休むことを、自分に許してあげてください。"
  },
  {
    id: 13,
    name: "DEATH",
    image: "death.png",
    nameJa: "死神",
    nameEn: "Death",
    roman: "XIII",
    uprightMeaning: "何かが終わり、次の段階へ移っていく時期。手放すことで、新しいものが入ってくる余地が生まれる。",
    reversedMeaning: "終わらせるべき何かを、恐れから引き延ばしている状態。",
    uprightMessage: "終わることは、悪いことじゃないと思います。\n今手放そうとしているもの、手放して大丈夫です。その先に、ちゃんと次があります。",
    reversedMessage: "終わらせることへの怖さ、すごくわかります。\nでも、ずっとこのままでいることの方が、もっと疲れることもあります。少しずつでいいので、整理してみませんか。"
  },
  {
    id: 14,
    name: "TEMPERANCE",
    image: "temperance.png",
    nameJa: "節制",
    nameEn: "Temperance",
    roman: "XIV",
    uprightMeaning: "バランスを保ちながら、少しずつ進んでいく時期。急がず丁寧にやることが、確かな結果につながる。",
    reversedMeaning: "どこかに過剰さや無理があり、心身のバランスが崩れてきている状態。",
    uprightMessage: "急いで結果を出そうとしなくていいです。\n丁寧に続けていることは、ちゃんと積み重なっています。今日もそのペースで大丈夫です。",
    reversedMessage: "無理をしている部分、ありませんか。\n全部を同時にうまくやろうとしなくていいです。今日は何か一つ、力を抜いてみましょう。"
  },
  {
    id: 15,
    name: "THE_DEVIL",
    image: "devil.png",
    nameJa: "悪魔",
    nameEn: "The Devil",
    roman: "XV",
    uprightMeaning: "恐れや思い込み、習慣が自分を縛っているかもしれない。気づくことが、最初の変化になる。",
    reversedMeaning: "縛られていたものから少しずつ自由になってきているサイン。小さな変化が積み重なっている。",
    uprightMessage: "「こうしなければいけない」と思っていること、本当にそうですか。\n一度疑ってみると、思っていたより自由だったと気づくことがあります。",
    reversedMessage: "少しずつ、でも確かに変わってきていますよ。\n全部一気に変えなくていいです。今日できる小さな一歩だけで、十分です。"
  },
  {
    id: 16,
    name: "THE_TOWER",
    image: "tower.png",
    nameJa: "塔",
    nameEn: "The Tower",
    roman: "XVI",
    uprightMeaning: "予期しない変化や、崩れていくような感覚がある時期。でもそれは、本当に必要なものだけを残すプロセス。",
    reversedMeaning: "来るべき変化を避け続けることで、消耗が続いている状態。",
    uprightMessage: "今、予想外のことが起きているかもしれません。\n怖いと思うのは当然です。でも崩れた後には、必ず整理できる時間が来ます。今は無理に答えを出さなくていいです。",
    reversedMessage: "変化を避けようとするほど、しんどくなっていませんか。\n起きていることを、少し受け入れてみると、気持ちが楽になることがあります。"
  },
  {
    id: 17,
    name: "THE_STAR",
    image: "star.png",
    nameJa: "星",
    nameEn: "The Star",
    roman: "XVII",
    uprightMeaning: "希望が少しずつ戻ってくる時期。焦らなくていい。回復は、ゆっくりでいい。",
    reversedMeaning: "先が見えなくて、希望を持ちにくくなっている状態。",
    uprightMessage: "少しずつ、でも確かに前に進んでいます。\n今すぐ全部うまくいかなくていい。今日という一日を、丁寧に過ごすだけで大丈夫です。",
    reversedMessage: "今は先が見えなくて、つらいかもしれません。\nそれでも、今日この瞬間をただ乗り越えることだけ考えてみてください。それで十分です。"
  },
  {
    id: 18,
    name: "THE_MOON",
    image: "moon.png",
    nameJa: "月",
    nameEn: "The Moon",
    roman: "XVIII",
    uprightMeaning: "不安や迷いが出やすい時期。見えていないものへの恐れが、実際より大きく感じられているかもしれない。",
    reversedMeaning: "混乱が少しずつ落ち着いてきて、見えなかったものが見えてくるサイン。",
    uprightMessage: "漠然とした不安を感じているなら、少し言葉にしてみてください。\n「何が怖いのか」を整理するだけで、気持ちが少し楽になることがあります。",
    reversedMessage: "ぼんやりしていた不安が、少し形になってきているかもしれません。\n怖くなくていいんです。見えてきた分だけ、対処できるようになっています。"
  },
  {
    id: 19,
    name: "THE_SUN",
    image: "sun.png",
    nameJa: "太陽",
    nameEn: "The Sun",
    roman: "XIX",
    uprightMeaning: "物事がうまく動いていく時期。明るく素直に行動することが、良い結果につながる。",
    reversedMeaning: "本来の活力や自信が出しにくくなっている状態。無理に元気に見せようとしているかもしれない。",
    uprightMessage: "今日は素直に、楽しいことをしていいと思います。\n深く考えすぎず、気持ちのいい方向に動いてみてください。",
    reversedMessage: "元気なふりをしていませんか。\n疲れているなら、疲れていると認めていいんです。今日は休むことを、自分に許してあげてください。"
  },
  {
    id: 20,
    name: "JUDGEMENT",
    image: "judgement.png",
    nameJa: "審判",
    nameEn: "Judgement",
    roman: "XX",
    uprightMeaning: "過去を振り返り、自分を見つめ直すタイミング。自分を赦すことで、新しいスタートが切れる。",
    reversedMeaning: "過去の失敗や後悔を引きずって、前に進みにくくなっている状態。",
    uprightMessage: "過去のことを、少し落ち着いて振り返れる時期だと思います。\nあのときの選択も、今のあなたを作っています。責めすぎなくていいです。",
    reversedMessage: "まだ自分を責めていませんか。\n後悔は、次に活かせれば十分です。過去は変えられないけれど、今日からの選択は変えられます。"
  },
  {
    id: 21,
    name: "THE_WORLD",
    image: "world.png",
    nameJa: "世界",
    nameEn: "The World",
    roman: "XXI",
    uprightMeaning: "一つの区切りを迎える時期。積み重ねてきたことへの充足感と、次へ向かう準備が整っている。",
    reversedMeaning: "もう少しで完成なのに、何かが未完のまま残っている状態。焦りが最後の詰めを雑にさせているかもしれない。",
    uprightMessage: "ここまで続けてきたこと、ちゃんと形になっています。\n今日は達成できたことを、静かにゆっくり振り返ってみてください。次のことは、そのあとで考えて大丈夫です。",
    reversedMessage: "もう少し、というところで止まっていませんか。\n焦らなくていいです。最後の一つを丁寧に仕上げることが、一番いい終わり方だと思います。"
  }
];

/**
 * 小アルカナ追加時はここに定義し、DECK_FULL に結合してください
 * const DECK_MINOR = [ ... ];
 */
const DECK_FULL = [...DECK_MAJOR];
