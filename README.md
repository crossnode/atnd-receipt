atnd-receipt
===========

#ATNDページの出席チェック用ブックマークレットです。

##使い方
1. 任意のブラウザで任意の名前でブックマークを作成します。URL欄には次のソースを貼り付けてください「javascript:(function(){var%20url='https://raw.github.com/crossnode/atnd-receipt/master/atndReceipt.js';var%20d=document;var%20e=d.createElement('script');e.src=url;d.getElementsByTagName('head')[0].appendChild(e);})();」
2. 管理したいイベントのATNDページにアクセスしたら上のブックマークをクリックします。
3. 参加者と補欠者のアイコンとアカウント名のみ表示され、その横にチェックボックスが生成されます。
4. あとは来場者にアカウントを見つけてもらってチェックするのみ。
※ 勉強会と懇親会が別の場合などに対応できるようにチェックボックスは2つ生成しています。
