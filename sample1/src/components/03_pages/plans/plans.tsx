import React from 'react';
import './plans.scss'

const Plans = () => {
  return (
    <div className='plans-wrapper'>
      <div className='plans-header'>
        <h1>PLANS</h1>
      </div>
      <div className='plans-contents'>
        <div className='card card1'>
          <div className='head'>
            <h3>経理ライトプラン</h3>
            <h4>¥5,000/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>月50仕訳まで</li>
              <li>年末整理決済仕訳</li>
            </ul>
          </div>
        </div>
        <div className='card card2'>
          <div className='head'>
            <h3>経理スタンダードプラン</h3>
            <h4>¥10,000/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>月100仕訳まで</li>
              <li>年末整理決済仕訳</li>
              <li>収支報告書</li>
            </ul>
            <p className='annotation'>
              ※追加10仕訳につき500円追加徴収
            </p>
          </div>
        </div>
        <div className='card card3'>
          <div className='head'>
            <h3>経理丸ごとプラン</h3>
            <h4>¥30,000~/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>仕訳数無制限</li>
              <li>会社で経理を雇うイメージ</li>
              <li>明細取得や請求書作成</li>
            </ul>
            <p className='annotation'>
              ex: 記帳、収支、明細、納品書、請求書、交通費精算書、出金伝票作成
            </p>
          </div>
        </div>
      </div>
      <div className='plans-sub'>
        青色申告決算書・収支内訳書・確定申告の作成や提出はご自身の責任で行って下さい。<br />
        <br />
        対象ソフト：freee会計、弥生会計<br />
        ご契約後の連絡方法：メール<br />
        (他の方法をご希望の方はご相談下さい)<br />
      </div>
    </div>
  )
}

export default Plans
