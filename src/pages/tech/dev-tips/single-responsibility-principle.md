---
title        : 一つのモノには一つのことだけやらせる
created      : 2020-11-17
last-modified: 2020-11-17
path:
  - /index.html Neo's World
  - /tech/index.html Tech
  - /tech/dev-tips/index.html 開発 Tips
---

いわゆる__単一責任の原則__ (<abbr title="Single Responsibility Principle">SRP</abbr>)。一つのモノの責務・役割は一つにする。「一つのモノに変更が入る理由は一つにする」ともいえる。


## なぜそうするのか

ある一つのモノが複数の理由で変更されうるとなると、それらの整合性を取るのが大変になるから。


## 単一責任のメリット

- そのクラスやメソッドの責任が単一で明確になっていれば、用途や使いどころがハッキリする。システム全体・各部分ともに見通しが良くなり、分かりやすくなる
- 単一責務に絞ることで、そのクラスやメソッドが依存するモノが減らせる。依存するモノが減らせると、変更に強くなる
- 人間の仕事を細分化・分業化した方が効率が良くなるのと同じ。一人で全部やろうとするとアタフタするが、コレだけやると決めてあれば、責任の所在もハッキリするし、作業の質も上がる。コードでも同じことが言える


## 単一責任を採用しないデメリット

- 「そのクラスやメソッドがやること」が増え、「何をインプットに何がアウトプットされるのか」が分かりづらくなる
- ある理由による変更を加える時、対象の箇所が依存するモノにも影響が出やすく、変更時の調整がしづらくなる

一つのモノが抱える責任、依存関係が増えていくと、保守しづらくなる。


## 一つのモノにやらせすぎない

- 概念化・抽象化 (オブジェクト指向・ドメイン駆動設計) が正しくできない人は、一つのモノに多くのことをやらせすぎる傾向にある
  - 「メッセージ処理サービスクラス」だとかいって、画面表示する全てのメッセージを定数で持っていたり、エラーメッセージの整形出力処理を持っていたり → いわゆる「__神クラス__」と呼ばれるアンチパターン
  - _「1メソッドの行数は100行以内、1クラスの行数は1000行以内」_などといった規則は、単に見通しが悪くなることを避けるためのコーディングルールとして展開されがちだが、単一責務の原則を守っていればまずこれ以上の行数にはならないだろう、という「数値化できる指標」としても有用
- 文書を書く場合も、一つの文書、一つの章に詰め込み過ぎない
  - 「〜〜について」というタイトルや見出しにしてしまうと、何をどこまで書くか迷う。見出しによって執筆する_「範囲」を定める_ことが大事


## 参考

- [プログラマが知るべき97のこと - 単一責任原則](https://プログラマが知るべき97のこと.com/%E3%82%A8%E3%83%83%E3%82%BB%E3%82%A4/%E5%8D%98%E4%B8%80%E8%B2%AC%E4%BB%BB%E5%8E%9F%E5%89%87/)