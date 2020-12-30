---
title        : 認証と認可・面倒臭い多要素認証が必要な理由
created      : 2021-01-01
last-modified: 2021-01-01
path:
  - /index.html Neo's World
  - /tech/index.html Tech
  - /tech/knowledges/index.html ナレッジ整理
---

## 認証と認可

認証と認可は似て非なる概念だが、同じように語られやすい。

- 認証 (Authentication)
  - 相手が誰かを特定すること
- 認可 (Authorization)
  - 特定の条件によって行動を許可すること

「認証」はまだ分かりやすいだろう。身分証の顔写真と本人を見比べて、「あなたは A さんですね」「あなたは A さんではありませんね」を判断すること。

「認可」が若干分かりにくいが、インターネット通信においては一般的に「ある条件に対して、あるリソースへのアクセスを許可すること」を指す。例えば、「電車の切符を持っている人」は、電車に乗る権限が与えられている。切符を誰が持っているかは関係なく、切符を譲渡すれば購入者でない人が電車に乗れるようになる。

「認証 (= 本人確認)」と「認可 (= 行動の許可)」がセットになる例が多いため、混同しやすい。例えば「運転免許証」は、それによって本人と確認できた者だけが運転できる。他人の免許証を持っていたとしても、本人とは認証できないし、運転を認める (認可する) こともできない。

## 多要素認証

多要素認証は、「認証」なので、本人確認の話。

まず、認証の方法には以下の3つがある。

- 知識認証 (What do you know?)
  - その人しか知り得ない情報を基に認証すること
  - ex. パスワードは作った本人の頭の中にしかない知識 → 正しいパスワードが入力されたということは本人である
  - その知識を他人に共有したり、盗み見されたりすると、なりすましされる危険性がある
- 所有物認証 (What do you have?)
  - その人しか持っていないモノを基に認証すること
  - ex. スマホに届くワンタイムパスワードを参照できるのは、スマホの所有者である本人だけ → その情報が一致したということは本人である
  - 他にも、電子証明書や MAC アドレスなどを利用するケースもある
  - その物を盗まれると、なりすましされる危険性がある
- 生体認証 (What you are?)
  - 指紋・声紋・虹彩・静脈など、ユーザの身体の一部を利用して認証すること
  - 生体検知技術には限界があり、人工的な偽造物でのなりすましができてしまう危険性がある

それぞれ、単体では不正利用できてしまう脆弱性があるため、これらを組み合わせることでセキュリティレベルを上げようというのが、多要素認証。

似て非なる言葉で、「多_段階_認証」という言葉もある。こちらは、単一の「要素」であっても該当する、複数回認証を試行すること。例えば「2種類のパスワードを入力させることでログインできる」といったシステムは、「知識認証」を2回使っている「二段階認証」となり、「二要素認証」とは言わない。「多_段階_認証」に効果がないとも言い切れないが、「多__要素__認証」よりは脆弱性のリスクが高いと考えられる。第1パスワードも第2パスワードも、まとめて同時に盗まれてしまうリスクもあるからだ。

一般的な多要素認証は、「ログイン画面でパスワードを入力する (知識認証)」→「スマホに届いたワンタイムパスワードを再度入力させる (所有物認証)」といった形で行われる。パスワードだけが漏れてもワンタイムパスワードが分からないからログインはできないし、スマホだけ盗まれてもパスワードが分からなければやっぱりログインできない。

iPhone の FaceID や TouchID を利用してアプリにログインする方式は、「スマホ内にのみ登録された生体情報を利用して (所有物認証)、生体認証を行う」という形で二要素認証になっている。スマホだけ盗まれても本人の顔がなければログインはできないし、本人がいても、生体登録されていない別のスマホではログインできない。

仕組みを知ってもやはり面倒臭さはあるが、この面倒臭さを安易になくそうとすることは、脆弱性を生み出すことになるワケである。

## 参考文献

- [よくわかる認証と認可 | Developers.IO](https://dev.classmethod.jp/articles/authentication-and-authorization/)
- [セキュリティ 要素認証とは？ – Office Cloud](https://officecloud-i.com/security-authentication/)