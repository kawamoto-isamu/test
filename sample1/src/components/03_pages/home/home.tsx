import React from 'react';
import './home.scss'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-header'>
        <h1>Yuta Hasegawa</h1>
        <p>フリーランスエンジニア</p>
      </div>
      <div className='home-contents'>
        <div className='child top'>
          <h2>TOP</h2>
          <h3>
            日々の取引・決算までの入力を代行します。<br />
            青色申告決算書・収支内訳書・確定申告の作成や提出はご自身の責任で行って下さい。<br />
            <br />
            対象ソフト：freee会計、弥生会計<br />
            ご契約後の連絡方法：メール<br />
            (他の方法をご希望の方はご相談下さい)<br />
            <br />
          </h3>
        </div>
        <div className='child'>
          <h2>経歴</h2>
          <p>
            2018年に経理部として入社。日次業務から年次業務を担当。<br />
            <br />
            学生時代から投資が好きで、学生時代に日商簿記を勉強し1級を取得。<br />
            お金に携われる仕事をしたいと思い経理部を希望し、配属<br />
            現在は個人事業主の方をサポートしたいと経理代行を始める<br />
            個人事業主の仕訳入力や請求書発行などの経理業務を請け負っています。<br />
            <br />
          </p>
        </div>
        <div className='child'>
          <h2>趣味</h2>
          <p>
            ・旅行<br />
            ・スポーツ観戦(野球、サッカー)<br />
            <br />
          </p>
        </div>
        <div className='child'>
          <h2>お客様にやって頂くこと</h2>
          <p>
            ①会計ソフトのアカウント作成、料金の支払い<br />
            ②銀行口座・クレジットカードの連携<br />
            ③資料の提出(PDFまたは画像または紙)<br />
            　・通帳コピーまたは入出金明細<br />
            　・クレジットカード明細<br />
            　・売上請求書<br />
            　・支払請求書<br />
            　・現金払いの領収書<br />
            ④私用リストの提出(Excel、スプレッドシート等)<br />
            <br />
          </p>
        </div>
        <div className='child'>
          <h2>お問い合わせ</h2>
          <p>
            email : xxxxxxxxxx@xxx.com<br />
            TEL : 000-0000-0000<br />
            address : OO-AAA-AAA<br />
          </p>
          <a href="/contact">問い合わせフォーム</a>
        </div>
      </div>
    </div>
  )
}

export default Home
